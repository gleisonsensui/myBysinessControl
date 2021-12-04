let $fields = document.querySelectorAll('.input-entry');
let $btnShoot = document.querySelector('#btn-add');
let $dataShowBusiness = document.querySelector('table tbody');

console.log($dataShowBusiness);

$btnShoot.addEventListener('click', function(event) {

    event.preventDefault();

    let fieldRow = document.createElement('tr');

    $fields.forEach(element => {

        let fieldData = document.createElement('td');
        fieldData.textContent = element.value;
        fieldRow.appendChild(fieldData);
        $dataShowBusiness.appendChild(fieldRow);

    });

    let fieldTotal = document.createElement('td');
    fieldTotal.textContent = Number($fields[1].value) * Number($fields[2].value);
    fieldRow.appendChild(fieldTotal);

})






