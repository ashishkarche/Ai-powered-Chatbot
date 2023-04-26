// User pre-defined responses 
const responses = {
    greetingResponse: [
        'hello',
        'hi',
        'hey',
        'hello, how can I help you today?'
    ],

    goodbyeResponse: [
        'byee',
        'bye',
        'Bye! Have a nice day',
        'Bye!'
    ],

    // simple Response
    rock: ['paper', 'scissors', 'rock',],
    paper: ['paper', 'scissors', 'rock'],
    scissors: ['paper', 'scissors', 'rock'],
    'can you tell me a joke?': [
        'Sure, why did the tomato turn red? Because it saw the salad dressing!',
        'Why did the scarecrow win an award? Because he was outstanding in his field!'
    ],
    'where are you from?': [
        'I was created by Group, a research lab dedicated to advancing artificial intelligence technology.',
        'I come from a galaxy far, far away.'
    ],
    'what can you do?': [
        'I can answer questions, provide information on various topics, engage in conversations, and more. Just let me know how I can help you.',
        'I can do many things, but I am always learning and improving!'
    ],
    'whats the weather like today?': [
        'I\'m sorry, I don\'t have access to real-time weather data, but I can look up the weather forecast for you if you give me your location.',
        'I\'m sorry, I don\'t have access to real-time weather information. You can check your local weather forecast for more information.'
    ],
    'how old are you?': [
        'I don\'t have an age as I am an artificial intelligence program, but I was first released in 2023.',
        'As an artificial intelligence language model, I don\'t have an age like humans do. I exist solely to provide helpful responses to your questions and to engage in conversation with you. How can I assist you today?'
    ],
    'whats the meaning of life?': [
        'That\'s a philosophical question with many different answers. what do you think the meaning of life is?',
        'The meaning of life is a personal and subjective question that each individual must answer for themselves.',
        'Some people believe the meaning of life is to seek happiness and fulfillment, while others believe it is to serve a higher purpose or to make a positive impact on the world.',
        'There is no one definitive answer to the question of the meaning of life, but exploring different perspectives can help us better understand our own beliefs and values.'
    ],
    'who are you?': [
        'As an AI language model, I don\'t have emotions like humans do, but I\'m here to assist you with any questions or concerns you may have.',
        'I am a language model developed by Group, trained to answer questions and have conversations with humans.'
    ],
    'what are your capabilities?': [
        'I can answer questions, provide information on various topics, engage in conversations, and more. Just let me know how I can help you.',
        'I am constantly learning and growing, and I can assist with a wide range of tasks, including answering questions, providing information, engaging in conversations, and more. Feel free to ask me anything and I\'ll do my best to help!',
        'My capabilities are vast and varied, from providing information on different topics to engaging in conversation and answering questions.Let me know what you need help with and I\'ll do my best to assist you.'
    ],

    // Data management questions and responses
    'what is data management?': [
        'Data management is the process of collecting, storing, organizing, maintaining, and utilizing data in a way that allows organizations to make informed decisions and gain insights into their operations.',
        'In simpler terms, data management is all about making sure that data is accurate, consistent, and secure so that organizations can use it to their advantage.',
        'Data management also involves making sure that data is easily accessible to those who need it, while still maintaining privacy and confidentiality.'
    ],
    'what are some data management tools?': [
        'Some popular data management tools include databases (e.g., MySQL, Oracle), data warehouses (e.g., Amazon Redshift, Google BigQuery), and data governance solutions (e.g., Collibra, Informatica).',
        'Other data management tools that are becoming increasingly popular include data integration platforms (e.g., Talend, SnapLogic), data visualization tools (e.g., Tableau, Power BI), and machine learning platforms (e.g., TensorFlow, Scikit-learn).',
        'Ultimately, the specific data management tools that an organization chooses to use will depend on its unique needs and goals.'
    ],
    'why is data management important?': [
        'Effective data management is crucial for organizations to gain insights into their operations, make informed decisions, and maintain compliance with regulations. It also helps ensure data accuracy, consistency, and security.',
        'Without effective data management, organizations may struggle to make sense of the data they collect, which can lead to missed opportunities or poor decision-making.',
        'In addition, poor data management practices can lead to data breaches or other security incidents, which can be costly and damaging to an organization\'s reputation.'
    ],
    'what are the different types of data management?': [
        'There are several types of data management, including data governance, data modeling, data quality management, data security, and master data management.',
        'Data governance involves establishing policies and procedures for managing data, while data modeling involves creating a conceptual or logical representation of data.',
        'Data quality management is all about ensuring that data is accurate and consistent, while data security focuses on protecting data from unauthorized access or other security threats.',
        'Finally, master data management (MDM) is the process of creating and maintaining a single, consistent view of an organization\'s key data entities (e.g., customers, products) across different systems and departments.'
    ],
    'what is master data management?': [
        'Master data management (MDM) is the process of creating and maintaining a single, consistent view of an organization\'s key data entities (e.g., customers, products) across different systems and departments.',
        'MDM is important because it helps ensure that everyone in the organization is working with the same data, which can reduce errors and improve decision-making.',
        'MDM also helps organizations avoid issues like duplicate or conflicting data, which can cause confusion and lead to poor decisions.'
    ],
    'what is data governance?': [
        'Data governance is the process of managing the availability, usability, integrity, and security of the data used in an organization.',
        'Effective data governance involves establishing policies and procedures for managing data, as well as ensuring that everyone in the organization understands their roles and responsibilities when it comes to data.',
        'Data governance also involves monitoring data usage to ensure compliance with regulations and best practices, as well as making sure that data is accessible to those who need it while still maintaining privacy and confidentiality.'
    ],
    'what is big data?': [
        'Data that contains greater variety, arriving in increasing volumes and with more velocity.',
        'Big data refers to the large, diverse sets of information that grow at ever-increasing rates.'
    ],

    // Information security questions and responses
    'what is information security?': [
        'Information security refers to the practices and processes used to protect sensitive information from unauthorized access, use, disclosure, disruption, modification, or destruction.',
        'It is an essential component of any organization that deals with confidential or sensitive data.',
        'Effective information security helps prevent data breaches, cyber attacks, and other security incidents.',
    ],
    'what are some common information security threats?': [
        'Common information security threats include malware, phishing attacks, social engineering, hacking, and insider threats.',
        'These threats can cause significant damage to an organization, including financial losses, reputational damage, and legal consequences.',
        'It is crucial for organizations to implement robust security measures to protect against these threats.',
    ],
    'what is encryption?': [
        'Encryption is the process of converting information into a code or cipher to prevent unauthorized access or use.',
        'It is a fundamental component of information security, as it helps protect data from interception or theft.',
        'Encryption can be used to secure sensitive information such as passwords, credit card numbers, and personal data.',
    ],
    'what is multi-factor authentication?': [
        'Multi-factor authentication (MFA) is a security mechanism that requires users to provide two or more forms of identification before accessing a system or application.',
        'MFA provides an additional layer of security beyond a username and password, making it harder for attackers to gain access to sensitive information.',
        'Common forms of MFA include SMS codes, biometric authentication, and security tokens.',
    ],
    'what is a firewall?': [
        'A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules.',
        'Firewalls can be hardware or software-based and are used to protect networks from unauthorized access and cyber attacks.',
        'They are an essential component of network security and can help prevent data breaches and other security incidents.',
    ],
    'what is a vpn?': [
        'A virtual private network (VPN) is a secure connection between a device and a private network over the internet. It allows users to access resources on the private network as if they were directly connected to it.',
        'VPNs are commonly used by remote workers to securely access company resources, such as files and applications.',
        'They can also be used to protect sensitive data transmitted over public networks such as Wi-Fi hotspots.',
    ],

    //  database management system questions and response
    'what is data?' : [
        'Data refers to a collection of facts, figures, statistics, or any other information that can be processed, analyzed, or used to draw conclusions. Data can come in many forms, such as numbers, text, images, audio, and video.'
    ],
    'what is a database management system?': [
        'A database management system (DBMS) is software that allows users to manage and organize data in a database.'
    ],
    'what is a primary key in a database?': [
        'A primary key is a unique identifier for each record in a table. It ensures that each record in a table is unique and can be accessed quickly.'
    ],
    'what is normalization in database design?': [
        'Normalization is the process of organizing data in a database to reduce data redundancy and improve data integrity.'
    ],
    'what is a join in sql?': [
        'A join in SQL is used to combine data from two or more tables into a single result set based on a common column.'
    ],
    'what is a stored procedure in a database?': [
        'A stored procedure is a pre-written program that is stored in a database and can be called to perform a specific task or set of tasks.'
    ],

    // Artificial Intelligence questions and response
    'what is artificial intelligence?': [
        'Artificial intelligence (AI) is a branch of computer science that involves the development of intelligent machines that can perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.'
    ],
    'what is machine learning?': [
        'Machine learning is a type of artificial intelligence that involves training computer algorithms to learn from data and make predictions or decisions without being explicitly programmed to do so.'
    ],
    'what is natural language processing?': [
        'Natural language processing (NLP) is a branch of artificial intelligence that involves the processing and analysis of human language, such as text or speech.'
    ],
    'what is deep learning?': [
        'Deep learning is a type of machine learning that uses neural networks with multiple layers to learn complex representations of data.'
    ],
    'what is computer vision?': [
        'Computer vision is a field of artificial intelligence that involves the development of algorithms that can interpret and understand visual information from the world around us.'
    ],

    // General Knowledge questions and response
    'what is the capital of brazil?': [
        'Brasília'
    ],
    'what is the largest country in the world by land area?': [
        'Russia'
    ],
    'who invented the telephone?': [
        'Alexander Graham Bell'
    ],
    'what is the currency of japan?': [
        'Japanese yen'
    ],
    'who is the current prime minister of india?': [
        'Narendra Modi'
    ],

    // about Computer field Gk
    'what does ram stand for?':[
        'Random Access Memory'
    ],
    'what does rom stand for?':[
        'Read Only Memory'
    ],
    'what is the full form of cpu?':[
        'Central Processing Unit'
    ],
    'who is known as the father of computer?':[
        ' Charles Babbage'
    ],
    'what is the full form of usb?':[
        'Universal Serial Bus'
    ],
    'what is the full form of pdf?':[
        'Portable Document Format'
    ],
    'who founded microsoft corporation?':[
        'Bill Gates and Paul Allen'
    ],
    'what does html stand for?':[
        'Hypertext Markup Language'
    ],
    'what is the full form of http?':[
        'Hypertext Transfer Protocol'
    ],
    'what is the full form of lan?':[
        'Local Area Network'
    ],
    'what is the full form of wan?':[
        'Wide Area Network'
    ],
    'what is the full form of vpn?':[
        'Virtual Private Network'
    ],
    'what is the full form of bios?':[
        'Basic Input Output System'
    ],
    'what is the full form of ascii?':[
        'American Standard Code for Information Interchange'
    ],
    'what is the full form of dns?':[
        'Domain Name System'
    ],
    'what is the full form of jpeg?':[
        'Joint Photographic Experts Group'
    ],
    'who invented the world wide web?':[
        'Tim Berners-Lee'
    ],
    'what is the full form of sql?':[
        'Structured Query Language'
    ],
    'who is the ceo of apple inc.?':[
        'Tim Cook'
    ],
    'who is the ceo of amazon?':[
        'Andy Jassy'
    ],
    'who is the ceo of google?':[
        'Sundar Pichai'
    ],
    'who is the ceo of facebook?':[
        'Mark Zuckerberg'
    ],

    // Default response
    defaultResponse: [
        'I am not sure what you are asking. Can you please try asking again with different words?',
        'I am sorry, I did not understand your question. Could you please rephrase it?',
        'I am still learning and may not know the answer to your question. Could you please try asking something else?',
    ]
};

// Get a random response for the input
function getBotResponse(input) {

    // Check for Hello or goodbye input
    if (input.toLowerCase().includes('hello') || input.toLowerCase().includes('hi') || input.toLowerCase().includes('hey')) {
        // the Math.random() function to return a random greeting response from the array. 
        return responses.greetingResponse[Math.floor(Math.random() * responses.greetingResponse.length)];
    } else if (input.toLowerCase().includes('goodbye') || input.toLowerCase().includes('bye')) {
        return responses.goodbyeResponse[Math.floor(Math.random() * responses.goodbyeResponse.length)];
    }

    // Check if the input ends with a question mark
    if (!input.trim().endsWith('?')) {
        // If the input doesn't end with a question mark, add it
        input += '?';
    }

    // Check if the input matches a pre-defined response
    if (responses.hasOwnProperty(input.toLowerCase())) {
        // The getBotResponse() function selects a random response from the list of possible responses for a given input, using Math.random().
        const possibleResponses = responses[input.toLowerCase()];
        return possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
    }

    // Check if the input starts with "math "
    if (input.startsWith('calculate ')) {
        // Remove "math " from the input string
        const mathInput = input.slice(10);
        // Call the mathOperation function with the remaining input
        return mathOperation(mathInput);
    }
    // Default response
    return responses.defaultResponse[Math.floor(Math.random() * responses.defaultResponse.length)];;
}

function mathOperation(input) {
    let result;
    if (input.startsWith('sin ')) {
        const num = parseFloat(input.slice(4));
        result = Math.sin(num);
    } else if (input.startsWith('cos ')) {
        const num = parseFloat(input.slice(4));
        result = Math.cos(num);
    } else if (input.startsWith('tan ')) {
        const num = parseFloat(input.slice(4));
        result = Math.tan(num);
    } else if (input.startsWith('factorial ')) {
        const num = parseFloat(input.slice(10));
        result = factorial(num);
    } else {
        const [num1, operator, num2] = input.split(' ');
        // Convert the numbers from strings to numbers
        const num1Value = parseFloat(num1);
        const num2Value = parseFloat(num2);

        // Check the operator and perform the corresponding operation
        switch (operator) {
            case '+':
                result = num1Value + num2Value;
                break;
            case '-':
                result = num1Value - num2Value;
                break;
            case '*':
                result = num1Value * num2Value;
                break;
            case '/':
                result = num1Value / num2Value;
                break;
            case '%':
                result = num1Value % num2Value;
                break;
            case '^':
                result = Math.pow(num1Value, num2Value);
                break;
            default:
                result = 'Invalid operation';
                break;
        }
    }
    return result.toString();
}

function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}