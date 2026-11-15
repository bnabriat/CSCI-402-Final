const form = document.getElementById('comment-form');
const list = document.getElementById('comments-list');

async function loadComments() {
  const res = await fetch('/api/comments');
  const comments = await res.json();

  list.innerHTML = '';
  comments.forEach(c => {
    const div = document.createElement('div');
    div.className = 'comment';

    const name = document.createElement('strong');
    name.textContent = c.name;            

    const date = document.createElement('small');
    date.textContent = ' · ' + c.date;

    const msg = document.createElement('p');
    msg.textContent = c.message;

    div.append(name, date, msg);
    list.appendChild(div);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const res = await fetch('/api/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: form.name.value,
      message: form.message.value
    })
  });

  if (res.ok) {
    form.reset();
    loadComments();
  } else {
    alert('Something went wrong. Please try again.');
  }
});

loadComments();