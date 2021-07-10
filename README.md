# Modern_JS
Learn modern JS from basic concepts 

    - DOM (Document Object Model)

    - when document(webpage) loaded, then browser create an object is called 'Document Object'

    -using 'Document Object', we can add/remove/alter the element

    -DOM see the webpage like hierarcial tree structure of nodes    

        =>Root node

        =>Element node

        =>Text node

    - get the reference of the element

        =>querySelector

        =>querySelectorAll(NodeList => access forEach method)

        =>getElementById(id is unique => so, there is no collection)

        =>getElementsByClass(HTMLcollection => can't access forEach method)

        =>getElementsByTagName(HTMLcolection)

    -get and set attribute

        =>getAttribute('attribute name')

        =>setAttribute('attributename', 'attribute value') => change the exist attribute value or create new attribute name and value

            - override the attribute and CAN'T APPEND THE ATTRIBUTE

    -Change the CSS style

        =>queryElement.style

        =>queryElement.style.property = 'value' //change the exist attribute value or create new attribute name and value

            - CAN APPEND THE ATTRIBUTE

        eg: content.style.color = 'green'

        =>content.style.color = '' => remove the style

    -add/remove/toogle the class

        =>queryElement.classList.add('className');

        =>queryElement.classList.remove('className');

        =>queryElement.classList.toggle('className');
 
So, Let's get started
