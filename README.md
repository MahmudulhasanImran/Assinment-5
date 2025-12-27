1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById  is a single element. you can first ,directly access if you known the uniq  Id.
     getElementsByClassName	An HTMLCollection (array-like, but not a real array).	Selecting multiple elements that share a class.
     querySelector The first element that matches a CSS selector.	
     querySelectorAll	A NodeList (static list of all matching elements).	When you need to select multiple items using CSS-style logic.

2. How do you create and insert a new element into the DOM?

   Ans: const newDiv = document.createElement('div'); // Create
       newDiv.innerText = "Hello World";   // Configure
       document.body.appendChild(newDiv);  // Insert

3. What is Event Bubbling and how does it work?
   
  Ans : Event Bubbling is the default way events travel in the DOM. When an event happens on an element (like a click on a button), it doesn't just stay there.
        It "bubbles up" to its parent, then the grandparent, and so on, all the way up to the document object.How it works: Imagine a button inside a div. 
        If you click the button, the browser first triggers the button's click handler, then the div's click handler, and finally the body's click handler.

4. What is Event Delegation and why is it useful?
   
    ANs:  Event Delegation is a technique where you attach a single event listener to a parent element instead of attaching many listeners to individual child elements.
         Why it is useful:
         Memory Efficiency: One listener uses less memory than 100 listeners.
         Dynamic Elements: If you add a new button to the list via JavaScript later, the parent listener will automatically handle it.
         You don't have to manually bind a new listener to the new button.

  5. Difference between preventDefault() and stopPropagation()

     Ans:  These two methods are often confused because they both "stop" something, but they stop very different things:
            preventDefault(): Stops the browser's default action.
             Example: Stops a link from opening a URL or a form from refreshing the page.
                       stopPropagation(): Stops the event from bubbling up.
             Example: If you click a button inside a div, calling this will make sure the button's click triggers, but the div never "hears" about it. 
