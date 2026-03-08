// Full page Loading Spinner

let currentStatus = "all-btn";

window.addEventListener("load", () => {
  const spinner = document.getElementById("spinner-container");
  const content = document.querySelectorAll(".spin");

  setTimeout(() => {
    spinner.classList.add("hidden");
    content.forEach((el) => {
      el.classList.remove("invisible");
    });
  }, 100);

  // allIssue();
});

// All issue

const allIssue = async () => {
  document.getElementById("card-container").innerHTML =
    `<div class="col-span-full mx-auto"><span class="loading loading-spinner loading-xl"></span></div>`;

  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  // console.log(url)
  try {
    const res = await fetch(url);
    const data = await res.json();
    allIssueDisplay(data.data);
  } catch (error) {
    document.getElementById("card-container").innerHTML =
      "<p class='text-red-500 text-3xl flex justify-center items-center col-span-full'>Failed to Load Card</p>";
  }
};

// Display all Issue

const allIssueDisplay = (issue) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  document.getElementById("all-issue").innerText = issue.length;

  issue.forEach((cardDetails) => {
    const card = document.createElement("div");

    card.innerHTML = `
<div class="w-[256px]">
  
  
            <div onclick="my_modal_1.showModal()" class="rounded-t-md  h-[200px] bg-white shadow-md p-4">
              <div class="flex justify-between mb-3">
                <div class="">
                  <img src="./assets/Open-Status.png" alt="" class="w-full" />
                </div>
                <div class="">
                  <h1
                    class="text-[12px] w-16 bg-amber-200 text-center font-medium rounded-full"
                  >
                    ${cardDetails.priority}
                  </h1>
                </div>
              </div>
              <div class="2">
                <h1 class="text-[14px] font-semibold text-[#1F2937] mb-2">
                  ${cardDetails.title}
                </h1>
              </div>
              <div class="3">
                <p class="line-clamp-2 text-[14px] mb-3 text-[#64748B]">
                  ${cardDetails.title}
                </p>
              </div>

              <div class="flex gap-1">
                <div class="">
                  <p
                    class="text-[#EF4444] text-[12px] font-medium rounded-full px-2 border-2 border-[#FECACA]"
                  >
                    <i class="fa-solid fa-bug"></i> BUG
                  </p>
                </div>
                <div
                  class="border-2 border-[#FDE68A] rounded-full px-2 font-medium text-[12px]"
                >
                  HELP WANTED
                </div>
              </div>
            </div>
            <div class="rounded-b-md bg-white mt-0.5 shadow-md p-4">
              <div class="text-[14px] text-[#64748B]"><p>#${cardDetails.id} ${cardDetails.assignee}</p></div>
              <div class="text-[14px] text-[#64748B]"><p>1/15/2024</p></div>
            </div>
         
  
</div> `;
    cardContainer.appendChild(card);
  });
};

// get all btn
const btnAllIssue = document.getElementById("all-btn");
const openBtn = document.getElementById("open-btn");
const closedBtn = document.getElementById("closed-btn");

// Toggle Btn

const toggleBtn = (id) => {
  currentStatus = id;

  const allCountDiv = document.getElementById("all-issue");
  const openCountDiv = document.getElementById("open-count");
  const closedCountDiv = document.getElementById("closed-count");

  const allBtnGet = [btnAllIssue, openBtn, closedBtn];

  allBtnGet.forEach((btn) => {
    btn.classList.remove("active-btn", "inactive-btn");

    // check btn

    if (btn.id === id) {
      btn.classList.add("active-btn"); //add style class
      btn.classList.remove("inactive-btn"); //remove style class
    } else {
      btn.classList.add("inactive-btn"); //add style class
      btn.classList.remove("active-btn"); //remove style class
    }
  });

  // Show and Hide Issue Count

  if (id === "all-btn") {
    allCountDiv.classList.remove("hidden");
    openCountDiv.classList.add("hidden");
    closedCountDiv.classList.add("hidden");
  } else if (id === "open-btn") {
    allCountDiv.classList.add("hidden");
    openCountDiv.classList.remove("hidden");
    closedCountDiv.classList.add("hidden");
  } else if (id === "closed-btn") {
    allCountDiv.classList.add("hidden");
    openCountDiv.classList.add("hidden");
    closedCountDiv.classList.remove("hidden");
  }
};

allIssue();
