ints = { "home": 7, "car": 9, "personal": 12 }
var contactNum = (e) => {
    e.preventDefault()
    x = e.target.value
    console.log(x)
    return true
}

const netLogin = (e) => {
    console.log(e.target.value);
}

const roiAmount = () => {
    var x = document.getElementById("typeloan").value
    if (x !== "")
        document.getElementById("roi").innerHTML = ints[document.getElementById("typeloan").value] + "%"
    else
        document.getElementById("roi").innerHTML = ""
}

const calculateEMI = () => {
    interestRate = ints[document.getElementById("typeloan").value]
    principal = document.getElementById("amount").value
    duration = document.getElementById("duration").value * 12
    applicantName = document.getElementById("applicant").value
    flag = true
    if (duration === 0 || (duration / 12) > 25 || (duration / 12) <= 1 || !duration) {
        flag = false
        alert("Please choose correct duration")
    }
    if (interestRate === 0 || !interestRate) {
        flag = false
        alert("Please choose your loan type")
    }
    if (principal === 0 || !principal) {
        flag = false
        alert("Please Enter correct loan amount")
    }
    if (!applicantName) {
        flag = false
        alert("Please Enter your name")
    }
    if (flag) {
        roi = (interestRate / 12) / 100
        stub = Math.pow((1 + roi), duration)
        emi = principal * roi * (stub / (stub - 1))
        console.log(emi, stub, roi, interestRate);
        document.getElementById("res").innerHTML = `<p> ${applicantName}'s EMI for ${duration} months at ${interestRate}% interest Rate is ${emi}</p>`
    }
}