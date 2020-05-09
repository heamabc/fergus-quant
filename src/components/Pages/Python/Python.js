import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import '../css/AllPages.scss';
//import './css/sunburst.css'

class HomePage extends Component {
    componentDidMount()  {
        const script = document.createElement("script");
    
        script.src = "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=desert";
        script.async = true;
    
        document.body.appendChild(script);
      }
    render() {
        
      return (
        
        <Page>       
          <Title label="List, Tuple, Set, Dictionary?" />
          <PassageTitle label="3 concept to clarify" />
          <MinorTitle label="Mutable and Immutable Objects" />
          <p>
              In python, an immutable object is an object that cannot be modified after it is created. In contrast, Mutable
              object can be changed after being created. 
          </p>
          <MinorTitle label="Ordered and Umordered Collections" />
          <p>
              Ordered collections mean that each element in the collection is stored in a 
          </p>
          <MinorTitle label="Hash Function" />
          <p>
              Hash functiion is a function to transform the input value to another value. The hash value depends on the input value, 
              and inputs with the same value always have the same hash. (Inputs with different values may occasionallyhave the same hash too.)
              Both set and dictionary utlizie hash function. The input data is stored in the location generated by a hash function. 
              As every input data has its corresponding index, hash function can help us map items. That is, whenever we want to add a new data, 
              the hash will generate an index, if the index has already taken, the data inputed is already in the collection.
          </p>
          <p>
              According to Python documentation, <a href="https://docs.python.org/3/glossary.html#term-hashable">An object is hashable if it
              has a hash value which never changes during its lifetime</a>. That is, the object is immutable.
          </p>
          <PassageTitle label="List vs Tuple" />
          <p>
              list is mutable and tuple is immutable. List require more memory as the data of it is stored in a variable
              sized block of memory. For tuple, a new object has to be created if you want to alter the value. Both of them are ordered collections. 
              However, tuple is hashable while list is not hashable
          </p>
          <p>
              Memory: List will overallocate memory as it is mutable. While tuple is structured, it will not overallocate
          </p>
          <p>
              Time: The creation of list take longer as there are few more instructions. However, the time for retrieval of data are 
              the same as the instruction are the same.
          </p>
          <PassageTitle label="List vs set" />
          <p>
              list is ordered sequence. As such, it can be indexed, i.e. each element can be accessed using its position 
              in the list. Set is unordered sequence, and the index of the data is generated by a hash function.
          </p>
          <p>
              Iteration : If we want to iterate over the collection, list is faster as it is an ordered sequence. 
          </p>
          <p>
              Checking existence of element : set is faster as the hash function can quickly generate the index of the data and 
              check if the index has already been taken. On the other hand, list has to iterate from the first to the last element and
              see if the element exists.
          </p>
          <PassageTitle label="Dictionary" />
          <p>
              Dictionary is an unordered collection of data that store the key and value pair. The key must be unique and
              immutable. 
          </p>
          <p>
              The key of dictionary is like set, it uses hash table to determine the index of the data. Therefore, checking the 
              existence of element is much faster than list.
          </p>
          
          <Title label="Why list comprehension is faster than for loop?" />
          <p>
              Python will first allocate the memory for the list before adding the elements into it. While simple for loop will 
              first generate the list and append and resize the list as more items are added. Therefore, list comprehension will
              be faster generally.
          </p>
          <p>
              BTW, another avantage of list comprehension is to keep your script neat and easy to read.
          </p>
          <p>
              Therefore, you can image that if we are going to have a for loop that will append value to a <code>np.array</code>. To save time, it is 
              better to first initialize a <code>np.array</code> with that length and assign the index of the array to the value. We can then prevent 
              from using append over and over.
          </p>
        
            <PassageTitle label="Lambda" />
            <p>
                The <code> lambda</code> keyword is to declare an anonymous function. Lambda behaves the same way as normal function. 
                So dont expect there is any difference in execution time or memory (Although technically function need a namespace).
                There is 3 major difference between lambda and normal function
            </p>
            <ul>
                <li>Lambda does not have name</li>
                <li>Lambda only accept single expression (eg. np.sum) and always return the result of the single expression</li>
                <li>Lambda will be thrown away after used.</li>
            </ul>
            <PassageTitle label="Generator" />
            <MinorTitle label="iterator" />
            <p>
                First, we need to know what is an iterator. iterator is a any collection of value that can be used in loop to iterate over.
            </p>
            <MinorTitle label="Yield" />
            <p>
                The keyword <code> yield</code> indicates that the function will return the value back to the caller and suspends function's execution
                and retains enough state to enable the function to resume where it suspend. So you can expect the function to continue execution
                of the function immediate after the last yield run when we resume the function. 
            </p>
            <MinorTitle label="Generator" />
            <p>
                Generator is a function/object that uses yield to generate iterator. This allows us to produce the value of the iterator when we need it, rather
                than computing them at once like a list.
            </p>
            <PassageTitle label="Decorator" />
            <MinorTitle label="Background" />
            <p>
                In Python, functions are first-class objects. It means that they can be passed to a function as an argument, and be returned from other functions as well.
            </p>
            <MinorTitle label="Function that alter another function" />
            <p>
                A function can have another function as an input and do any adjustment!
            </p>
            <MinorTitle label="Decorator" />
            <p>
                Decorator is a function that alter another function, it must have function as its argument. IT can also receive the argument by using the keyword 
                <code>*args</code> and <code>**kwargs</code>
            </p>
            <Title label="Python OOP" />
            <PassageTitle label="Method" />
            <p>
                Functions inside of a class are called method. There are 3 types of methods.
            </p>
            <MinorTitle label="Instance Method" />
            <p>
                Instance method is a function that will receive a class instance and do operation to the instance. The syntax of instance method is 
                like this
                <pre className="prettyprint linenums lang-python">
                    def func1(self, x):
                </pre>
            </p>
            <MinorTitle label="Static Method" />
            <p>
                Static method is method that will not accept the instance itself as argument. To create a static method, we have to add a <code>@staticmethod</code>
                decorator before the method. The syntax of static method is like this
                <pre className="prettyprint linenums lang-python">
                    @staticmethod {'\n'}
                    def func1(x):
                </pre>
            </p>
            <MinorTitle label="Class Method" />
            <p>
                Class method is method that will accept the class as argument. Therefore, any operation on the class will affect all the instance belongs to the class.
                To create a class method, we have to add a <code>@classmethod</code> decorator before the method. The syntax of static method is like this
                <pre className="prettyprint linenums lang-python">
                    @classmethod {'\n'}
                    def func1(x):
                </pre>
            </p>
            <PassageTitle label="Superclass and Subclass" />
            <p>
                In Python, we can create subclass of a superclass. A subclass will inherit all the attributes and methods of the superclass. Other than that, we can add 
                additional method and attributes to the subclass. We can also alter the inherited attributes/methods. However, those changes will only happen in the subclass.
                The superclass will not be affected. Subclass can be created in the below manner.
            </p>
            <pre className="prettyprint linenums lang-python">
                class class2(class1):
            </pre>
            <p>
                In the above example, class2 is a subclass of class1
            </p>
       </Page> 
      )
    }
  }
  
  export default HomePage;