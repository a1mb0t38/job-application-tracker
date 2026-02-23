let interviewList = [];
let rejectedList = [];

let totalJobs = document.getElementById('total-jobs');
let totalInterview = document.getElementById('total-interview');
let totalRejected = document.getElementById('total-rejected');

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');



function calculateCount(){
    totalJobs.innerText = allCardSection.children.length;
    totalInterview.innerText = interviewList.length;
    totalRejected.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-primary', 'text-white');
    interviewFilterBtn.classList.remove('bg-primary', 'text-white');
    rejectedFilterBtn.classList.remove('bg-primary', 'text-white');

    allFilterBtn.classList.add('bg-white', 'text-black');
    interviewFilterBtn.classList.add('bg-white', 'text-black');
    rejectedFilterBtn.classList.add('bg-white', 'text-black');

    const selected = document.getElementById(id);
    selected.classList.remove('bg-white', 'text-black');
    selected.classList.add('bg-primary', 'text-white');
}


mainContainer.addEventListener('click', function(event){
    const parentElement = event.target.parentNode.parentNode;
    
});