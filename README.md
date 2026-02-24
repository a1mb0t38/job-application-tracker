1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    Ans: the difference is getElementById use "id" from html file. getElementByClassName use "all class name" from html file. querySelector can use id and classname but it takes the first matching element and querySelectorAll match all the element.

2. How do you create and insert a new element into the DOM?
    Ans: first need to create the element
       let div = document.createElement("div")
        then add the content
        div.innterText = "this is a div"
        Now add to the DOM
        document.body.appendChild(div)

3. What is Event Bubbling? And how does it work?
    Ans: so when we click a child, it works on that element first and then it moves to the parent like bubble. this is called event bubbling. 
    after triggering an event. it works on the child element first and it moves to the parent and then it moves to it's parent and upto the document.


4. What is Event Delegation in JavaScript? Why is it useful?
    Ans: event delegation is a technique where we add the event listener to a parent and use event bubbling to detect the child element.
    it is usefull because it makes the code cleaner and easier to maintain.

5. What is the difference between preventDefault() and stopPropagation() methods?
    Ans: preventDefault(), stops the browsers default action for an event, while stopPropagation(), stops the event form moving further up or down the DOM.