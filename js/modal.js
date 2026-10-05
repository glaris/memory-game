import { container } from './ui.js';

let activeModal = null;

export function openModal(content) {
    if (activeModal !== null) {
        closeModal();
    }

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal__window');
    modalWindow.setAttribute('role', 'dialog');
    modalWindow.setAttribute('aria-modal', 'true');

    const closeModalButton = document.createElement('button');
    closeModalButton.classList.add('modal__button', 'button');
    closeModalButton.textContent = 'Close';
    closeModalButton.addEventListener('click', closeModal);

    modalWindow.append(content, closeModalButton);
    modal.append(modalWindow);
    modal.addEventListener('click', handleBackdropClick);
    document.addEventListener('keydown', handleKeyDown);

    document.body.append(modal);
    document.body.classList.add('no-scroll');
    container.inert = true;
    closeModalButton.focus();

    activeModal = modal;
}

export function closeModal() {
    if (activeModal === null) {
        return;
    }

    document.removeEventListener('keydown', handleKeyDown);
    activeModal.remove();
    activeModal = null;
    document.body.classList.remove('no-scroll');
    container.inert = false;
}

function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
        closeModal();
    }
}

function handleKeyDown(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}