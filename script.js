// Funciones globales para todos los ejercicios

// Función para smooth scroll
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  })
}

// Función para mostrar/ocultar elementos
function toggleElement(elementId) {
  const element = document.getElementById(elementId)
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block"
  } else {
    element.style.display = "none"
  }
}

// Función para validar formularios
function validateForm(formId) {
  const form = document.getElementById(formId)
  const inputs = form.querySelectorAll("input[required]")
  let isValid = true

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "#ef4444"
      isValid = false
    } else {
      input.style.borderColor = "#d1d5db"
    }
  })

  return isValid
}

// Función para crear efectos de hover
function addHoverEffects() {
  const buttons = document.querySelectorAll(".exercise-btn, .social-btn, .form-button")

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
    })
  })
}

// Inicializar efectos cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  addHoverEffects()
})
