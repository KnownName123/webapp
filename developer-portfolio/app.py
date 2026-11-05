import os
import re
from flask import Flask, render_template, request, redirect, url_for, flash
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY')

def get_db_connection():
    conn = psycopg2.connect(
        host=os.getenv('DB_HOST'),
        database=os.getenv('DB_NAME'),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASSWORD'),
        port=os.getenv('DB_PORT')
    )
    return conn

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit-form', methods=['POST'])
def submit_form():
    name = request.form.get('name', '').strip()
    email = request.form.get('email', '').strip()
    message = request.form.get('message', '').strip()

    email_pattern = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
    if not name or not email or not message:
        flash('Усі поля обов’язкові для заповнення!', 'error')
        return redirect(url_for('index') + '#contact')
    
    if not re.match(email_pattern, email):
        flash('Введено некоректний формат email!', 'error')
        return redirect(url_for('index') + '#contact')

    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO messages (name, email, message) VALUES (%s, %s, %s);",
            (name, email, message)
        )
        conn.commit()
        cur.close()
        conn.close()
        flash('Форму успішно надіслано та збережено в базі даних!', 'success')
    except Exception as e:
        flash(f'Поשлка підключення до бази даних: {e}', 'error')

    return redirect(url_for('index') + '#contact')

@app.route('/messages')
def list_messages():
    try:
        conn = get_db_connection()
        cur = conn.cursor(cursor_factory=RealDictCursor)
        cur.execute("SELECT * FROM messages ORDER BY created_at DESC;")
        msgs = cur.fetchall()
        cur.close()
        conn.close()
    except Exception as e:
        msgs = []
        flash(f'Помилка завантаження повідомлень: {e}', 'error')

    return render_template('messages.html', messages=msgs)

if __name__ == '__main__':
    app.run(debug=True)