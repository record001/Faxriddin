const k  = 1.4
const y_mt  = 20
const y  = 19.62
const tg_30  = 0.577





document.querySelector(".form").addEventListener("submit", e=> {
  e.preventDefault()
  let r0 = document.querySelector("#r0").value-0
  let k1 = document.querySelector("#k1").value-0
  let k2 = document.querySelector("#k2").value-0
  let d = document.querySelector("#d").value-0
  let b0 = document.querySelector("#b0").value-0
  let a0 = document.querySelector("#a0").value-0
  let N = document.querySelector("#N").value-0
  let hf = d- 0.5
  let bmax = b0 + 2 *hf* tg_30
  let amax = a0 + 2 *hf* tg_30
  let A_max = amax*bmax
  let R = 1.7 * (r0 * (1+ k1*((bmax < 6 ? bmax: 6 )- 2)) + k2 * y*(d - 3))

  let An = (k * N) / ((R/1.4) - hf*y_mt)

  let delta = ((A_max - An) / An)*100

  document.querySelector("#hf").textContent = hf
  document.querySelector("#bmax").textContent = bmax
  document.querySelector("#amax").textContent = amax
  document.querySelector("#A_max").textContent = A_max
  document.querySelector("#R").textContent = R
  document.querySelector("#An").textContent = An
  document.querySelector("#delta").textContent = delta
})