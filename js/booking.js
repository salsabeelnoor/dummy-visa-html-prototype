const oneWayBtn = document.getElementById("one-way");
const roundWayBtn = document.getElementById("round-way");
const rcvNowBtn = document.getElementById("rcv-now");
const rcvLaterBtn = document.getElementById("rcv-later");
const disableReturnWay = document.querySelectorAll(".disable-return-way");
const addPassengerBtn = document.getElementById("add-passenger-btn");
const passengerDetailsBlock = document.getElementById("passenger-details");
const deletePassengerBtn = document.getElementById("delete-passenger")
let passengerCount = 1;
const toggleActiveBtn = (buttonID) => {
  if (buttonID === "one-way") {
    oneWayBtn.classList.add("active");
    if (roundWayBtn.classList.contains("active")) {
      roundWayBtn.classList.remove("active");
    }
    disableReturnWay.forEach((element) => {
      element.classList.add("disable-return-way");
    });
  } else if (buttonID === "round-way") {
    oneWayBtn.classList.remove("active");
    roundWayBtn.classList.add("active");
    disableReturnWay.forEach((element) => {
      element.classList.remove("disable-return-way");
    });
  } else if (buttonID === "rcv-now") {
    rcvNowBtn.classList.add("active");
    if (rcvLaterBtn.classList.contains("active")) {
      rcvLaterBtn.classList.remove("active");
    }
  } else if (buttonID === "rcv-later") {
    rcvNowBtn.classList.remove("active");
    rcvLaterBtn.classList.add("active");
  }
};

const addNewPassengerBlock = () => {
    passengerCount += 1;
  const newPassenger = `
    <div id='passenger--${passengerCount}' class="input--wrapper d-flex flex-column flex-md-row align-items-center gap-3 gap-md-0 mt-3">
        <div class="d-flex align-items-center">
            <p class="me-3 fw-semibold paragraph-medium">${passengerCount}</p>
            <div class="input-box input-box--w120 me-md-2">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Title</option>
                    <option value="1">Mr</option>
                    <option value="2">Ms</option>
                    <option value="3">Mrs</option>
                </select>
            </div>
        </div>
        <div class="input-box input-box--w280 me-md-2">
            <input type="text" class="form-control" placeholder="First Name">
        </div>
        <div class="input-box input-box--w280 me-md-2">
            <input type="text" class="form-control" placeholder="Last Name">
        </div>
        <button id="delete-passenger" onclick="deletePassenger(${passengerCount})" class="cross-icon d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-x"></i>
        </button>
    </div>
    `;
    passengerDetailsBlock.insertAdjacentHTML("beforeend", newPassenger);
};

const deletePassenger = (passengerID) =>{
    const selectedPassenger = document.getElementById(`passenger--${passengerID}`);
    selectedPassenger.remove()
}

oneWayBtn.addEventListener("click", () => toggleActiveBtn("one-way"));
roundWayBtn.addEventListener("click", () => toggleActiveBtn("round-way"));
rcvNowBtn.addEventListener("click", () => toggleActiveBtn("rcv-now"));
rcvLaterBtn.addEventListener("click", () => toggleActiveBtn("rcv-later"));
addPassengerBtn.addEventListener("click", () => addNewPassengerBlock());
