const ALERT_SHOW_TIME = 5000;
const main = document.querySelector('main');
const body = document.querySelector('body');

const showGetDataError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.borderRadius = '0 0 5rem 0';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.padding = '1rem 2rem';
  alertContainer.style.padding = '1rem 2rem';
  alertContainer.style.fontSize = '1rem';
  alertContainer.style.color = 'white';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#EF1616';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const createModal = (selector, id) => {
  const errorOnSend = main.querySelector(selector);
  body.setAttribute('scroll', 'no');
  body.style.overflow = 'hidden';

  if (errorOnSend) {
    errorOnSend.classList.toggle('hidden');
    return;
  }

  const alertContainer = document.getElementById(id).content.querySelector('div').cloneNode(true);
  main.appendChild(alertContainer);

  const hideModal = () => {
    alertContainer.classList.toggle('hidden');
    body.removeAttribute('scroll');
    body.style.overflow = '';
  }

  if (alertContainer.querySelector('button')) {
    const button = alertContainer.querySelector('button');
    button.addEventListener('click', hideModal);
  }

  document.addEventListener('click', (evt) => {
    if (evt.target === alertContainer) {
      hideModal();
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape' && body.hasAttribute('scroll')) {
      hideModal();
    }
  });
}

const showPostDataSuccess = () => {
  createModal('.success', 'success');
}

const showPostDataError = () => {
  createModal('.error', 'error');
}

export {showGetDataError, showPostDataError, showPostDataSuccess};
