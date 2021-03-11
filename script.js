const btn = document.querySelector('.Btn');
const input = document.querySelector('#messageIn');
const output = document.querySelector('.show');

btn.addEventListener('click', give)

function give() {
    let content = input.value;

    if (content === '') {
        alert('Please Enter Valid Value.Current Value is Empty')
    } else {
        output.innerHTML = content;
        input.value = '';
    }
}