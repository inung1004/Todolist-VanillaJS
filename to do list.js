const input_text = document.getElementById("ToDoListInput");
const plusbutton = document.getElementById("plusIcon");
const list = document.getElementById("sectionArticle");

const deleteText = () => {
    input_text.value = '';
} //인풋창에 적은 글씨를 없애주는 함수

let count = 0;
//hiFunctiopn -> 연상선배랑 지민선배가 알려주신 낙타체
//input_text -> 지우선배가 알려주신 스네이크체
// function inputText() { } 아래와 같음
const inputText = () => {
    const content = document.createElement('div');
    content.className = "content";
    content.id = `content${count}`;
    content.innerHTML = `
    <div id="todayListContainer">
                <div id="checkIcon" onclick="check(${count})" class="check${count}">
                </div>
                <div id="list">
                    <div class="list">
                        ${input_text.value}
                    </div>
                </div>
                <div id="deleteIcon" onclick="deleteList(${count})">
                    <img src="./img/X.svg" alt="삭줴">
                </div>
    </div>
    `
    count++;
    list.appendChild(content);
    deleteText();
}//innerHTML해서 오늘 할 일을 리스트로 만들어주는 함수
plusbutton.addEventListener('click', inputText); //inputText함수 호출

const deleteList = (cnt) => {
    const content = document.getElementById(`content${cnt}`);
    content.innerHTML = "";
}//리스트를 삭제해주는 함수

const check = (cnt) => {
    const checkButton = document.getElementsByClassName(`check${cnt}`)[0];

    if (checkButton.innerHTML.trim() == "") {
        const checkcheck = document.createElement('div');
        checkcheck.className = "check";
        checkcheck.id = `check${cnt}`;
        checkcheck.innerHTML = `
        <div id="check">
        <img src="./img/v.svg" alt="이거슨체크다이말이여">
        </div>
        `;
        checkButton.appendChild(checkcheck);
    }
    else {
        checkButton.innerHTML = "";
    }
}//checkButton 안에 checkcheck이 없으면 넣어주고, 있으면 비워주는 함수