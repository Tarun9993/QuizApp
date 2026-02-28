export const quizzes = [
  {
    id:1,
    quizTitle: "Java Programming Quiz",
    img:"https://images.seeklogo.com/logo-png/15/1/java-logo-png_seeklogo-158094.png",
    totalQuestions: 15,
    questions: [
      {
        id: 1,
        difficulty: "easy",
        question: "Which keyword is used to define a class in Java?",
        options: ["function", "class", "define", "object"],
        correctAnswer: 1
      },
      {
        id: 2,
        difficulty: "easy",
        question: "Which method is the entry point of a Java program?",
        options: ["start()", "run()", "main()", "init()"],
        correctAnswer: 2
      },
      {
        id: 3,
        difficulty: "easy",
        question: "Which of the following is not a primitive data type in Java?",
        options: ["int", "float", "String", "boolean"],
        correctAnswer: 2
      },
      {
        id: 4,
        difficulty: "medium",
        question: "What is the size of an int in Java?",
        options: ["2 bytes", "4 bytes", "8 bytes", "Depends on system"],
        correctAnswer: 1
      },
      {
        id: 5,
        difficulty: "medium",
        question: "Which concept allows a class to inherit properties from another class?",
        options: ["Encapsulation", "Polymorphism", "Inheritance", "Abstraction"],
        correctAnswer: 2
      },
      {
        id: 6,
        difficulty: "medium",
        question: "Which interface must be implemented to create a thread in Java?",
        options: ["Runnable", "Serializable", "Cloneable", "Comparable"],
        correctAnswer: 0
      },
      {
        id: 7,
        difficulty: "medium",
        question: "Which collection does not allow duplicate elements?",
        options: ["List", "Set", "Map", "ArrayList"],
        correctAnswer: 1
      },
      {
        id: 8,
        difficulty: "hard",
        question: "What is the default value of an instance variable of type int?",
        options: ["0", "null", "undefined", "Not assigned"],
        correctAnswer: 0
      },
      {
        id: 9,
        difficulty: "hard",
        question: "Which keyword is used to prevent inheritance of a class?",
        options: ["static", "final", "const", "abstract"],
        correctAnswer: 1
      },
      {
        id: 10,
        difficulty: "medium",
        question: "Which exception is thrown when dividing by zero in Java?",
        options: [
          "ArithmeticException",
          "NullPointerException",
          "IOException",
          "NumberFormatException"
        ],
        correctAnswer: 0
      },
      {
        id: 11,
        difficulty: "hard",
        question: "Which memory area stores local variables in Java?",
        options: ["Heap", "Stack", "Method Area", "JVM Cache"],
        correctAnswer: 1
      },
      {
        id: 12,
        difficulty: "easy",
        question: "Which loop executes at least once in Java?",
        options: ["for", "while", "do-while", "foreach"],
        correctAnswer: 2
      },
      {
        id: 13,
        difficulty: "medium",
        question: "Which keyword is used to create a subclass?",
        options: ["implements", "extends", "inherits", "super"],
        correctAnswer: 1
      },
      {
        id: 14,
        difficulty: "hard",
        question: "What is method overloading?",
        options: [
          "Multiple methods with same name but different parameters",
          "Overriding a method in subclass",
          "Calling multiple methods at once",
          "Changing method return type only"
        ],
        correctAnswer: 0
      },
      {
        id: 15,
        difficulty: "medium",
        question: "Which keyword is used to refer to the current object?",
        options: ["super", "this", "current", "self"],
        correctAnswer: 1
      }
    ]
  },
  {
    id:2,
  quizTitle: "Operating Systems Quiz",
  img: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
  totalQuestions: 15,
  questions: [
    { id: 1, difficulty: "easy", question: "Which is not an OS?", options: ["Linux", "Windows", "Oracle", "macOS"], correctAnswer: 2 },
    { id: 2, difficulty: "easy", question: "Which component manages hardware?", options: ["Kernel", "Shell", "IDE", "Compiler"], correctAnswer: 0 },
    { id: 3, difficulty: "easy", question: "Which scheduling is non-preemptive?", options: ["Round Robin", "FCFS", "Priority", "Multilevel"], correctAnswer: 1 },
    { id: 4, difficulty: "medium", question: "Deadlock requires?", options: ["Mutual Exclusion", "Circular Wait", "Hold & Wait", "All of these"], correctAnswer: 3 },
    { id: 5, difficulty: "medium", question: "Which memory is fastest?", options: ["RAM", "Cache", "Disk", "Virtual"], correctAnswer: 1 },
    { id: 6, difficulty: "medium", question: "Paging avoids?", options: ["Fragmentation", "Deadlock", "Thrashing", "CPU idle"], correctAnswer: 0 },
    { id: 7, difficulty: "hard", question: "Semaphore is used for?", options: ["Synchronization", "Memory allocation", "Scheduling", "Compilation"], correctAnswer: 0 },
    { id: 8, difficulty: "hard", question: "Thrashing occurs when?", options: ["High paging", "CPU idle", "Low memory use", "Cache hit"], correctAnswer: 0 },
    { id: 9, difficulty: "medium", question: "Round Robin uses?", options: ["Priority", "Time Quantum", "Stack", "Queue size"], correctAnswer: 1 },
    { id: 10, difficulty: "easy", question: "Which is CLI?", options: ["GUI", "Shell", "Compiler", "IDE"], correctAnswer: 1 },
    { id: 11, difficulty: "medium", question: "Context switching saves?", options: ["Registers", "Disk", "Cache", "ROM"], correctAnswer: 0 },
    { id: 12, difficulty: "hard", question: "Banker’s Algorithm avoids?", options: ["Starvation", "Deadlock", "Thrashing", "Paging"], correctAnswer: 1 },
    { id: 13, difficulty: "medium", question: "Which is preemptive?", options: ["FCFS", "SJF", "Round Robin", "None"], correctAnswer: 2 },
    { id: 14, difficulty: "easy", question: "Virtual memory uses?", options: ["Disk", "Cache", "CPU", "Registers"], correctAnswer: 0 },
    { id: 15, difficulty: "hard", question: "Which handles interrupts?", options: ["Kernel", "Compiler", "RAM", "BIOS"], correctAnswer: 0 }
  ]
},
{
    id:3,
  quizTitle: "SQL Quiz",
  img: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
  totalQuestions: 15,
  questions: [
    { id: 1, difficulty: "easy", question: "Retrieve data using?", options: ["GET", "SELECT", "SHOW", "FETCH"], correctAnswer: 1 },
    { id: 2, difficulty: "easy", question: "Filter records?", options: ["WHERE", "JOIN", "GROUP BY", "ORDER BY"], correctAnswer: 0 },
    { id: 3, difficulty: "easy", question: "Primary key ensures?", options: ["Uniqueness", "Null", "Index", "Relation"], correctAnswer: 0 },
    { id: 4, difficulty: "medium", question: "JOIN combines?", options: ["Tables", "Columns", "Databases", "Indexes"], correctAnswer: 0 },
    { id: 5, difficulty: "medium", question: "Aggregate function?", options: ["SUM()", "SELECT", "JOIN", "UPDATE"], correctAnswer: 0 },
    { id: 6, difficulty: "medium", question: "GROUP BY used with?", options: ["Aggregate", "Insert", "Delete", "Drop"], correctAnswer: 0 },
    { id: 7, difficulty: "hard", question: "Normalization reduces?", options: ["Redundancy", "Speed", "Indexes", "Keys"], correctAnswer: 0 },
    { id: 8, difficulty: "hard", question: "ACID stands for?", options: ["Atomicity", "Consistency", "Isolation", "All"], correctAnswer: 3 },
    { id: 9, difficulty: "medium", question: "LEFT JOIN returns?", options: ["Left table all rows", "Right table all rows", "Common only", "None"], correctAnswer: 0 },
    { id: 10, difficulty: "easy", question: "Delete table?", options: ["DROP", "DELETE", "REMOVE", "CLEAR"], correctAnswer: 0 },
    { id: 11, difficulty: "medium", question: "Foreign key ensures?", options: ["Relationship", "Uniqueness", "Null", "Index"], correctAnswer: 0 },
    { id: 12, difficulty: "hard", question: "Index improves?", options: ["Search speed", "Storage", "Security", "Redundancy"], correctAnswer: 0 },
    { id: 13, difficulty: "easy", question: "Update records?", options: ["UPDATE", "CHANGE", "MODIFY", "SET"], correctAnswer: 0 },
    { id: 14, difficulty: "medium", question: "HAVING works with?", options: ["GROUP BY", "WHERE", "SELECT", "INSERT"], correctAnswer: 0 },
    { id: 15, difficulty: "hard", question: "3NF removes?", options: ["Transitive dependency", "Partial dependency", "Redundancy", "Keys"], correctAnswer: 0 }
  ]
},
{
    id:4,
  quizTitle: "Spring Boot Quiz",
  img: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
  totalQuestions: 15,
  questions: [
    { id: 1, difficulty: "easy", question: "Spring Boot is built on?", options: ["Spring Framework", "Hibernate", "Servlet", "JSP"], correctAnswer: 0 },
    { id: 2, difficulty: "easy", question: "Main annotation?", options: ["@SpringBootApplication", "@Component", "@RestController", "@Service"], correctAnswer: 0 },
    { id: 3, difficulty: "easy", question: "Inject dependency using?", options: ["@Autowired", "@Bean", "@Value", "@Injectable"], correctAnswer: 0 },
    { id: 4, difficulty: "medium", question: "@RestController combines?", options: ["@Controller + @ResponseBody", "@Service + @Repository", "@Bean + @Component", "@Autowired + @Component"], correctAnswer: 0 },
    { id: 5, difficulty: "medium", question: "Configuration file?", options: ["application.properties", "pom.xml", "index.js", "config.yaml"], correctAnswer: 0 },
    { id: 6, difficulty: "medium", question: "JPA stands for?", options: ["Java Persistence API", "Java Programming App", "JSON Processing API", "Java Platform App"], correctAnswer: 0 },
    { id: 7, difficulty: "hard", question: "Repository extends?", options: ["JpaRepository", "HttpRepository", "ControllerRepo", "BeanRepo"], correctAnswer: 0 },
    { id: 8, difficulty: "hard", question: "@Transactional ensures?", options: ["ACID properties", "Security", "Caching", "Routing"], correctAnswer: 0 },
    { id: 9, difficulty: "medium", question: "Embedded server?", options: ["Tomcat", "Apache", "Nginx", "IIS"], correctAnswer: 0 },
    { id: 10, difficulty: "easy", question: "@Service layer is?", options: ["Business Logic", "Database", "UI", "Server"], correctAnswer: 0 },
    { id: 11, difficulty: "medium", question: "Hibernate used for?", options: ["ORM", "Security", "Frontend", "Routing"], correctAnswer: 0 },
    { id: 12, difficulty: "hard", question: "@Bean defines?", options: ["Spring Managed Object", "Database Table", "Controller", "Query"], correctAnswer: 0 },
    { id: 13, difficulty: "medium", question: "@RequestMapping maps?", options: ["URL paths", "Database", "Security", "Cache"], correctAnswer: 0 },
    { id: 14, difficulty: "easy", question: "Spring Boot reduces?", options: ["Boilerplate code", "Security", "Memory", "Database"], correctAnswer: 0 },
    { id: 15, difficulty: "hard", question: "Spring Security handles?", options: ["Authentication", "ORM", "Logging", "Templates"], correctAnswer: 0 }
  ]
},
{
    id:5,
  quizTitle: "Data Structures & Algorithms Quiz",
  img: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
  totalQuestions: 15,
  questions: [
    { id: 1, difficulty: "easy", question: "Stack follows?", options: ["FIFO", "LIFO", "LILO", "Random"], correctAnswer: 1 },
    { id: 2, difficulty: "easy", question: "Queue follows?", options: ["FIFO", "LIFO", "Random", "Tree"], correctAnswer: 0 },
    { id: 3, difficulty: "easy", question: "Binary Search works on?", options: ["Sorted array", "Unsorted array", "Stack", "Queue"], correctAnswer: 0 },
    { id: 4, difficulty: "medium", question: "Time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], correctAnswer: 1 },
    { id: 5, difficulty: "medium", question: "Worst case of QuickSort?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], correctAnswer: 2 },
    { id: 6, difficulty: "medium", question: "Which traversal uses queue?", options: ["DFS", "BFS", "Inorder", "Postorder"], correctAnswer: 1 },
    { id: 7, difficulty: "hard", question: "Heap is implemented using?", options: ["Array", "Linked List", "Stack", "Queue"], correctAnswer: 0 },
    { id: 8, difficulty: "hard", question: "AVL tree is?", options: ["Balanced BST", "Heap", "Graph", "Queue"], correctAnswer: 0 },
    { id: 9, difficulty: "medium", question: "Insertion sort best case?", options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"], correctAnswer: 0 },
    { id: 10, difficulty: "easy", question: "Graph uses?", options: ["Vertices & Edges", "Nodes only", "Indexes", "Stacks"], correctAnswer: 0 },
    { id: 11, difficulty: "medium", question: "Merge sort complexity?", options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"], correctAnswer: 0 },
    { id: 12, difficulty: "hard", question: "Dijkstra works on?", options: ["Weighted Graph", "Tree", "Stack", "Heap only"], correctAnswer: 0 },
    { id: 13, difficulty: "medium", question: "HashMap average access?", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correctAnswer: 0 },
    { id: 14, difficulty: "easy", question: "Tree root has?", options: ["No parent", "Two children", "One child", "Many parents"], correctAnswer: 0 },
    { id: 15, difficulty: "hard", question: "Recursion uses?", options: ["Stack", "Heap", "Queue", "Array"], correctAnswer: 0 }
  ]
},
{
    id:6,
  quizTitle: "React Quiz",
  img: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
  totalQuestions: 15,
  questions: [
    { id: 1, difficulty: "easy", question: "React is a?", options: ["Library", "Framework", "Language", "Database"], correctAnswer: 0 },
    { id: 2, difficulty: "easy", question: "JSX stands for?", options: ["JavaScript XML", "JSON XML", "Java Syntax", "JS Extension"], correctAnswer: 0 },
    { id: 3, difficulty: "easy", question: "State is managed using?", options: ["useState", "useEffect", "useRef", "useMemo"], correctAnswer: 0 },
    { id: 4, difficulty: "medium", question: "Virtual DOM improves?", options: ["Performance", "Security", "Memory", "Database"], correctAnswer: 0 },
    { id: 5, difficulty: "medium", question: "Props are?", options: ["Read-only", "Mutable", "Functions", "Hooks"], correctAnswer: 0 },
    { id: 6, difficulty: "medium", question: "Hook for lifecycle?", options: ["useEffect", "useState", "useRef", "useMemo"], correctAnswer: 0 },
    { id: 7, difficulty: "hard", question: "Context API used for?", options: ["Global state", "Routing", "Database", "Styling"], correctAnswer: 0 },
    { id: 8, difficulty: "hard", question: "Re-render happens when?", options: ["State changes", "CSS loads", "API loads", "Build runs"], correctAnswer: 0 },
    { id: 9, difficulty: "medium", question: "Key prop used in?", options: ["Lists", "Forms", "Hooks", "Events"], correctAnswer: 0 },
    { id: 10, difficulty: "easy", question: "React created by?", options: ["Facebook", "Google", "Microsoft", "Amazon"], correctAnswer: 0 },
    { id: 11, difficulty: "medium", question: "useRef stores?", options: ["Mutable value", "State", "Props", "CSS"], correctAnswer: 0 },
    { id: 12, difficulty: "hard", question: "Memo prevents?", options: ["Unnecessary re-renders", "Errors", "Routing", "CSS reload"], correctAnswer: 0 },
    { id: 13, difficulty: "medium", question: "React Router handles?", options: ["Navigation", "State", "Security", "ORM"], correctAnswer: 0 },
    { id: 14, difficulty: "easy", question: "Component must return?", options: ["JSX", "HTML file", "JSON", "CSS"], correctAnswer: 0 },
    { id: 15, difficulty: "hard", question: "useReducer is alternative to?", options: ["useState", "useEffect", "useRef", "Redux"], correctAnswer: 0 }
  ]
},
{
    id:7,
  quizTitle: "Python Quiz",
  img: "https://cdn-icons-png.flaticon.com/512/919/919852.png",
  totalQuestions: 15,
  questions: [
    { id: 1, difficulty: "easy", question: "Python is?", options: ["Compiled", "Interpreted", "Assembly", "Markup"], correctAnswer: 1 },
    { id: 2, difficulty: "easy", question: "List is?", options: ["Mutable", "Immutable", "Static", "Constant"], correctAnswer: 0 },
    { id: 3, difficulty: "easy", question: "Tuple is?", options: ["Mutable", "Immutable", "Dynamic", "Keyed"], correctAnswer: 1 },
    { id: 4, difficulty: "medium", question: "Dictionary stores?", options: ["Key-value pairs", "Indexes", "Only values", "Only keys"], correctAnswer: 0 },
    { id: 5, difficulty: "medium", question: "Which is used for OOP?", options: ["class", "def", "function", "lambda"], correctAnswer: 0 },
    { id: 6, difficulty: "medium", question: "Lambda is?", options: ["Anonymous function", "Loop", "Class", "Module"], correctAnswer: 0 },
    { id: 7, difficulty: "hard", question: "GIL stands for?", options: ["Global Interpreter Lock", "General Index Logic", "Global Internal Link", "Graphical Interface Layer"], correctAnswer: 0 },
    { id: 8, difficulty: "hard", question: "Which handles exceptions?", options: ["try-except", "catch", "error", "handle"], correctAnswer: 0 },
    { id: 9, difficulty: "medium", question: "List comprehension returns?", options: ["List", "Tuple", "Set", "Dict"], correctAnswer: 0 },
    { id: 10, difficulty: "easy", question: "Indentation defines?", options: ["Block", "Loop only", "Function only", "Nothing"], correctAnswer: 0 },
    { id: 11, difficulty: "medium", question: "__init__ is?", options: ["Constructor", "Destructor", "Loop", "Decorator"], correctAnswer: 0 },
    { id: 12, difficulty: "hard", question: "Decorator modifies?", options: ["Function behavior", "Variable type", "Loop", "Class name"], correctAnswer: 0 },
    { id: 13, difficulty: "medium", question: "NumPy is used for?", options: ["Numerical computing", "Web dev", "Security", "Database"], correctAnswer: 0 },
    { id: 14, difficulty: "easy", question: "Which is loop?", options: ["for", "if", "class", "def"], correctAnswer: 0 },
    { id: 15, difficulty: "hard", question: "Generator uses?", options: ["yield", "return", "break", "continue"], correctAnswer: 0 }
  ]
},
{
    id:8,
  quizTitle: "JavaScript Quiz",
  img: "https://cdn-icons-png.flaticon.com/512/919/919828.png",
  totalQuestions: 15,
  questions: [
    { id: 1, difficulty: "easy", question: "JS is a?", options: ["Interpreted", "Compiled", "Binary", "Markup"], correctAnswer: 0 },
    { id: 2, difficulty: "easy", question: "Declare variable?", options: ["let", "int", "varOnly", "define"], correctAnswer: 0 },
    { id: 3, difficulty: "easy", question: "DOM stands for?", options: ["Document Object Model", "Data Object Model", "Dynamic Object Model", "Design Object Model"], correctAnswer: 0 },
    { id: 4, difficulty: "medium", question: "Arrow function syntax?", options: ["=>", "->", "::", "==>"], correctAnswer: 0 },
    { id: 5, difficulty: "medium", question: "Promise handles?", options: ["Async operations", "Loops", "Variables", "CSS"], correctAnswer: 0 },
    { id: 6, difficulty: "medium", question: "Strict equality?", options: ["===", "==", "=", "!="], correctAnswer: 0 },
    { id: 7, difficulty: "hard", question: "Closure means?", options: ["Function with lexical scope", "Loop", "Class", "Array"], correctAnswer: 0 },
    { id: 8, difficulty: "hard", question: "Event loop handles?", options: ["Async tasks", "CSS", "HTML", "Database"], correctAnswer: 0 },
    { id: 9, difficulty: "medium", question: "JSON stands for?", options: ["JavaScript Object Notation", "Java Syntax Object", "JS Oriented Network", "None"], correctAnswer: 0 },
    { id: 10, difficulty: "easy", question: "Array method adds at end?", options: ["push()", "pop()", "shift()", "slice()"], correctAnswer: 0 },
    { id: 11, difficulty: "medium", question: "map() returns?", options: ["New array", "Boolean", "Number", "String"], correctAnswer: 0 },
    { id: 12, difficulty: "hard", question: "Prototype is?", options: ["Inheritance mechanism", "Loop", "Variable", "Hook"], correctAnswer: 0 },
    { id: 13, difficulty: "medium", question: "Which is framework?", options: ["React", "Java", "MySQL", "Linux"], correctAnswer: 0 },
    { id: 14, difficulty: "easy", question: "Which is falsy?", options: ["0", "1", "true", "[]"], correctAnswer: 0 },
    { id: 15, difficulty: "hard", question: "Async/await works with?", options: ["Promises", "Loops", "Classes", "CSS"], correctAnswer: 0 }
  ]
},
{
    id:9,
  quizTitle: "Web Development Quiz",
  img: "https://cdn-icons-png.flaticon.com/512/841/841364.png",
  totalQuestions: 15,
  questions: [
    { id: 1, difficulty: "easy", question: "HTML stands for?", options: ["HyperText Markup Language", "HighText Machine Language", "Home Tool Markup Language", "None"], correctAnswer: 0 },
    { id: 2, difficulty: "easy", question: "CSS used for?", options: ["Styling", "Database", "Logic", "Security"], correctAnswer: 0 },
    { id: 3, difficulty: "easy", question: "HTTP is?", options: ["Protocol", "Language", "Database", "Framework"], correctAnswer: 0 },
    { id: 4, difficulty: "medium", question: "Responsive design uses?", options: ["Media Queries", "Tables", "Frames", "Scripts"], correctAnswer: 0 },
    { id: 5, difficulty: "medium", question: "Backend handles?", options: ["Server logic", "CSS", "HTML only", "Icons"], correctAnswer: 0 },
    { id: 6, difficulty: "medium", question: "REST stands for?", options: ["Representational State Transfer", "Remote Execution Secure Tech", "Real Secure Transfer", "None"], correctAnswer: 0 },
    { id: 7, difficulty: "hard", question: "JWT used for?", options: ["Authentication", "Styling", "Routing", "Database"], correctAnswer: 0 },
    { id: 8, difficulty: "hard", question: "CORS controls?", options: ["Cross-origin requests", "CSS", "HTML", "JS"], correctAnswer: 0 },
    { id: 9, difficulty: "medium", question: "Which is frontend?", options: ["React", "Spring", "Node only", "MySQL"], correctAnswer: 0 },
    { id: 10, difficulty: "easy", question: "Which is backend?", options: ["Node.js", "CSS", "HTML", "Bootstrap"], correctAnswer: 0 },
    { id: 11, difficulty: "medium", question: "API means?", options: ["Application Programming Interface", "App Process Input", "Advanced Program Interface", "None"], correctAnswer: 0 },
    { id: 12, difficulty: "hard", question: "SSR stands for?", options: ["Server Side Rendering", "Static Style Rendering", "Secure Server Routing", "None"], correctAnswer: 0 },
    { id: 13, difficulty: "medium", question: "MVC stands for?", options: ["Model View Controller", "Main View Class", "Model Virtual Code", "None"], correctAnswer: 0 },
    { id: 14, difficulty: "easy", question: "Which is CSS framework?", options: ["Tailwind", "Node", "Spring", "Linux"], correctAnswer: 0 },
    { id: 15, difficulty: "hard", question: "Load balancing improves?", options: ["Scalability", "CSS", "HTML", "Syntax"], correctAnswer: 0 }
  ]
},
{
    id:10,
  quizTitle: "AI & Machine Learning Quiz",
  img: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
  totalQuestions: 15,
  questions: [
    { id: 1, difficulty: "easy", question: "AI stands for?", options: ["Artificial Intelligence", "Automated Input", "Advanced Interface", "None"], correctAnswer: 0 },
    { id: 2, difficulty: "easy", question: "ML is subset of?", options: ["AI", "Web", "Database", "Security"], correctAnswer: 0 },
    { id: 3, difficulty: "easy", question: "Supervised learning uses?", options: ["Labeled data", "Unlabeled data", "Random data", "No data"], correctAnswer: 0 },
    { id: 4, difficulty: "medium", question: "Classification predicts?", options: ["Category", "Number", "Graph", "Array"], correctAnswer: 0 },
    { id: 5, difficulty: "medium", question: "Regression predicts?", options: ["Continuous value", "Category", "Image", "Cluster"], correctAnswer: 0 },
    { id: 6, difficulty: "medium", question: "Overfitting means?", options: ["Model memorizes data", "Model generalizes well", "Model crashes", "Model stops"], correctAnswer: 0 },
    { id: 7, difficulty: "hard", question: "Neural network uses?", options: ["Layers", "Tables", "Queues", "Stacks"], correctAnswer: 0 },
    { id: 8, difficulty: "hard", question: "Activation function example?", options: ["ReLU", "JOIN", "SELECT", "HTTP"], correctAnswer: 0 },
    { id: 9, difficulty: "medium", question: "Clustering is?", options: ["Unsupervised", "Supervised", "Reinforced", "None"], correctAnswer: 0 },
    { id: 10, difficulty: "easy", question: "Training data used for?", options: ["Learning model", "Styling", "Routing", "Security"], correctAnswer: 0 },
    { id: 11, difficulty: "medium", question: "Accuracy measures?", options: ["Correct predictions", "Speed", "Memory", "Size"], correctAnswer: 0 },
    { id: 12, difficulty: "hard", question: "Gradient descent optimizes?", options: ["Loss function", "CSS", "HTML", "Routing"], correctAnswer: 0 },
    { id: 13, difficulty: "medium", question: "TensorFlow is?", options: ["ML framework", "Database", "Browser", "OS"], correctAnswer: 0 },
    { id: 14, difficulty: "easy", question: "Data preprocessing removes?", options: ["Noise", "Accuracy", "Features", "Labels"], correctAnswer: 0 },
    { id: 15, difficulty: "hard", question: "Reinforcement learning uses?", options: ["Reward system", "Labels only", "Tables", "Stacks"], correctAnswer: 0 }
  ]
}


];
