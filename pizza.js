const nonSelect = document.querySelector("select")
const kattalikDivs = document.querySelectorAll(".kattalik div")
const ustidaCheckboxes = document.querySelectorAll(".checkbox-group input")
const qoshimchaCheckboxes = document.querySelectorAll(".qoshimcha input")
const buyurtmaBtn = document.getElementById("buyurtmaBtn")

const nonSpan = document.getElementById("non")
const kattalikSpan = document.getElementById("kattalik")
const ustidaSpan = document.getElementById("ustida")
const qoshimchaSpan = document.getElementById("qoshimcha")

nonSelect.addEventListener("change", () => {
    nonSpan.textContent = nonSelect.value
})

kattalikDivs.forEach(div => {
    div.addEventListener("click", () => {
        kattalikDivs.forEach(d => d.classList.remove("active"))
        div.classList.add("active")
        kattalikSpan.textContent = div.textContent
    })
})

ustidaCheckboxes.forEach(ch => {
    ch.addEventListener("change", () => {
        let tanlangan = []
        ustidaCheckboxes.forEach(c => {
            if (c.checked) {
                tanlangan.push(c.parentElement.textContent.trim())
            }
        })
        ustidaSpan.textContent = tanlangan.join(", ")
    })
})

qoshimchaCheckboxes.forEach(ch => {
    ch.addEventListener("change", () => {
        let tanlangan = []
        qoshimchaCheckboxes.forEach(c => {
            if (c.checked) {
                tanlangan.push(c.parentElement.textContent.trim())
            }
        })
        qoshimchaSpan.textContent = tanlangan.join(", ")
    })
})

buyurtmaBtn.addEventListener("click", () => {
    if (!nonSpan.textContent || !kattalikSpan.textContent) {
        alert("Iltimos, non va kattalikni tanlang!")
    } else {
        alert("Buyurtma qabul qilindi!")
    }
})
