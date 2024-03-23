const checkboxDisabled = document.getElementById('checkbox-false');
const checkboxEnabled = document.getElementById('checkbox-true');
const form = document.getElementById('form');

const products = [];

function getColumnNames(name) {
  switch (name) {
    case 'Nome':
      return 'name';
    case 'Preço':
      return 'price';
    case 'Descrição':
      return 'description';
    case 'Disponibilidade':
      return 'isAvailable';
  }
}

function handleConvertToCurrency(number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);
}

function handleFormInputErrors() {
  let errorCount = 0;

  const nameField = document.getElementById('name');
  const nameError = document.createElement('span');
  nameError.innerHTML = 'Insira um nome válido.';

  if (!nameField.value.trim()) {
    errorCount++;
    nameField.after(nameError);
    setTimeout(() => nameError.remove(), 3000);
  }

  const descriptionField = document.getElementById('description');
  const descriptionError = document.createElement('span');
  descriptionError.innerHTML = 'Insira uma descrição válida.';

  if (!descriptionField.value.trim()) {
    errorCount++;
    descriptionField.after(descriptionError);
    setTimeout(() => descriptionError.remove(), 3000);
  }

  const priceField = document.getElementById('price');
  const priceError = document.createElement('span');
  priceError.innerHTML = 'Insira um preço válido.';

  if (!priceField.value || isNaN(priceField.value)) {
    errorCount++;
    priceField.after(priceError);
    setTimeout(() => priceError.remove(), 3000);
  }

  return errorCount === 0;
}

function handleProductWrapperUpdate() {
  const productWrapper = document.getElementById('product-grid');
  const columns = ['Nome', 'Preço', 'Descrição', 'Disponibilidade'];

  const productColumns = columns.map((column) => {
    return `
      <div class="column-wrapper">
        <span>${column}</span>
        <div class="column">${products
          .sort((a, b) => a.price - b.price)
          .map((product) => {
            const priceRow = column === 'Preço' && handleConvertToCurrency(product[getColumnNames(column)]);
            const availability = product[getColumnNames(column)] ? 'Disponível' : 'Indisponível';
            const availabilityRow = column === 'Disponibilidade' && availability;

            return `<span>${priceRow || availabilityRow || product[getColumnNames(column)]}</span>`;
          })
          .join('')}</div>
      </div>
    `;
  });

  productWrapper.innerHTML = productColumns.join('');
}

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  if (!handleFormInputErrors()) return;

  const name = formData.get('name');
  const price = formData.get('price');
  const description = formData.get('description');
  const isAvailable = (formData.get('checkbox-true') || formData.get('checkbox-false')) === 'true';

  products.push({ name, price, description, isAvailable });
  handleProductWrapperUpdate();
}

checkboxEnabled.addEventListener('change', handleCheckboxToggle);
checkboxDisabled.addEventListener('change', handleCheckboxToggle);

function handleCheckboxToggle(event) {
  const typeOfCheckboxIsEnabled = event.target.name === 'checkbox-true';
  if (typeOfCheckboxIsEnabled && checkboxDisabled.checked) checkboxDisabled.checked = false;
  if (!typeOfCheckboxIsEnabled && checkboxEnabled.checked) checkboxEnabled.checked = false;
}
