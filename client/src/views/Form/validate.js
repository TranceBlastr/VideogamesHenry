const validate = (formData) => {
  const errors = {};

  // Validación del campo "Name"
  if (!formData.name) {
    errors.name = "El nombre es obligatorio.";
  } else {
    const nameRegex = /^[A-Za-z0-9\s]+$/;
    if (!nameRegex.test(formData.name)) {
      errors.name = "El nombre no puede contener caracteres especiales.";
    }
  }

  // Validación del campo "background_image"
  if (!formData.background_image) {
    errors.background_image = "La URL de la imagen es obligatoria.";
  } else {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(formData.background_image)) {
      errors.background_image = "Ingrese una URL válida.";
    }
  }

  // Validación del campo "Descripcion"
  if (!formData.description) {
    errors.description = "La descripción es obligatoria.";
  } else if (formData.description.length < 10) {
    errors.description = "La descripción debe tener al menos 10 caracteres.";
  } else if (formData.description.length > 300) {
    errors.description =
      "La descripción debe tener como máximo 300 caracteres.";
  }

  // Validación del campo "date"
  if (!formData.launch) {
    errors.launch = "La fecha es obligatoria.";
  } else {
    const isValidDate = !isNaN(Date.parse(formData.launch));
    if (!isValidDate) {
      errors.launch = "Ingrese una fecha válida.";
    }
  }

  // Validación del campo "platform"
  if (formData.platform.length === 0) {
    errors.platform = "Seleccione al menos una plataforma.";
  }

  // Validación del campo "genres"
  if (formData.genres.length === 0) {
    errors.genres = "Seleccione al menos un género.";
  }

  return errors;
};

export default validate;
