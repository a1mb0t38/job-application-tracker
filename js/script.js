let interviewList = [];
let rejectedList = [];

let totalJobs = document.getElementById('total-jobs');
let totalInterview = document.getElementById('total-interview');
let totalRejected = document.getElementById('total-rejected');

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');



function calculateCount() {
    totalJobs.innerText = allCardSection.children.length;
    totalInterview.innerText = interviewList.length;
    totalRejected.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-primary', 'text-white');
    interviewFilterBtn.classList.remove('bg-primary', 'text-white');
    rejectedFilterBtn.classList.remove('bg-primary', 'text-white');

    allFilterBtn.classList.add('bg-white', 'text-black');
    interviewFilterBtn.classList.add('bg-white', 'text-black');
    rejectedFilterBtn.classList.add('bg-white', 'text-black');

    const selected = document.getElementById(id);
    selected.classList.remove('bg-white', 'text-black');
    selected.classList.add('bg-primary', 'text-white');

    if(id == 'interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }else if(id == 'all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }else if(id == 'rejected-filter-btn'){
         allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }
}


mainContainer.addEventListener('click', function (event) {
    

    if (event.target.classList.contains('interview-btn')) {
        const parentElement = event.target.parentNode.parentNode;
        const companyName = parentElement.querySelector('.company').innerText;
        const roleName = parentElement.querySelector('.role').innerText;
        const moneyOffer = parentElement.querySelector('.money').innerText;
        const statusPending = parentElement.querySelector('.state').innerText;
        const discriptionName = parentElement.querySelector('.discription').innerText;

        parentElement.querySelector('.state').innerText = 'interview';

        const cardinfo = {
            companyName,
            roleName,
            moneyOffer,
            statusPending:'interview',
            discriptionName
        }

        const companyExist = interviewList.find(item => item.companyName == cardinfo.companyName)
        
        if (!companyExist) {
            interviewList.push(cardinfo);
        }
        calculateCount();
        renderInterview();
    }else if (event.target.classList.contains('rejected-btn')) {
        const parentElement = event.target.parentNode.parentNode;
        const companyName = parentElement.querySelector('.company').innerText;
        const roleName = parentElement.querySelector('.role').innerText;
        const moneyOffer = parentElement.querySelector('.money').innerText;
        const statusPending = parentElement.querySelector('.state').innerText;
        const discriptionName = parentElement.querySelector('.discription').innerText;

        parentElement.querySelector('.state').innerText = 'Rejected';

        const cardinfo = {
            companyName,
            roleName,
            moneyOffer,
            statusPending:'Rejected',
            discriptionName
        }

        const companyExist = rejectedList.find(item => item.companyName == cardinfo.companyName)
        
        if (!companyExist) {
            rejectedList.push(cardinfo);
        }
        calculateCount();
        renderRejected();
    }
});

function renderInterview() {
    filterSection.innerHTML = ''

    for (let interview of interviewList) {
        console.log(interview)

        let div = document.createElement('div');
        div.className = 'bg-white shadow-sm p-6 mb-4'
        div.innerHTML = `
             <div class="flex justify-between items-center mb-5">
                    <div>
                        <h1 class="company text-[#002C5C] font-semibold text-base mb-1">${interview.companyName}</h1>
                        <p class="role text-[#64748B] text-sm">${interview.roleName}</p>
                    </div>
                    <div class="bg-white shadow-sm rounded-full max-w-10">
                        <i class="fa-regular fa-trash-can"></i>
                    </div>
                </div>
                <p class="money mb-5 text-[#64748B]">${interview.moneyOffer}</p>
                <div class="mb-5">
                    <button class="state btn btn-soft btn-primary">${interview.statusPending}</button>
                    <p class="discription text-[#323B49]">${interview.discriptionName}</p>
                </div>
                <div>
                    <button class="btn btn-outline btn-success">interview</button>
                    <button class="btn btn-outline btn-error">Rejected</button>
                </div>
        `
        filterSection.appendChild(div);
    }
}

function renderRejected() {
    filterSection.innerHTML = ''

    for (let rejected of rejectedList) {
        

        let div = document.createElement('div');
        div.className = 'bg-white shadow-sm p-6 mb-4'
        div.innerHTML = `
             <div class="flex justify-between items-center mb-5">
                    <div>
                        <h1 class="company text-[#002C5C] font-semibold text-base mb-1">${rejected.companyName}</h1>
                        <p class="role text-[#64748B] text-sm">${rejected.roleName}</p>
                    </div>
                    <div class="bg-white shadow-sm rounded-full max-w-10">
                        <i class="fa-regular fa-trash-can"></i>
                    </div>
                </div>
                <p class="money mb-5 text-[#64748B]">${rejected.moneyOffer}</p>
                <div class="mb-5">
                    <button class="state btn btn-soft btn-primary">${rejected.statusPending}</button>
                    <p class="discription text-[#323B49]">${rejected.discriptionName}</p>
                </div>
                <div>
                    <button class="btn btn-outline btn-success">interview</button>
                    <button class="btn btn-outline btn-error">Rejected</button>
                </div>
        `
        filterSection.appendChild(div);
    }
}

