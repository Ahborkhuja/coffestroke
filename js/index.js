var making_steps = document.querySelectorAll('.coffee_making__menu_list li');
var rotating = document.querySelectorAll('.content__row img');
const bur_open = document.querySelector('.navbar__sub_list')
const btn = document.querySelector('.site_header__burger');
const body = document.querySelector('body');
const site_head = document.querySelector('.site_header');



making_steps.forEach(li => {
  li.addEventListener('click', () => {
    li.classList.add('actstep');
    resetSteps();
    li.classList.add('actstep');
  });
});
function resetSteps() {
  making_steps.forEach(li => li.classList.remove('actstep'));
}
btn.addEventListener('click', () => {
  bur_open.classList.toggle('open');
  body.classList.toggle('overflow');
  site_head.classList.toggle('bgcol');
  btn.classList.toggle('exit');
});
window.addEventListener("resize", function () {
  if (window.matchMedia("(max-width: 550px)").matches) {
    bur_open.classList.remove('open');
    site_head.classList.remove('bgcol');
    btn.classList.remove('exit');
    body.classList.remove('overflow');
  }
});