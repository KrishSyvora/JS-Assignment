//(?=.*[0-9]) means that the password must contain a single digit from 1 to 9.
// (?=.*[a-z]) means that the password must contain one lowercase letter.
// (?=.*[A-Z]) means that the password must contain one uppercase letter.
// (?=.*\W) means that the password must contain one special character.
// .{8,16} means that the password must be 8-16 characters long. We must use this at the end of the regex, just before the $ symbol.
const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

const emailRegex = /[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}/;

const creditCardRegex = /\b\d{4}-?\d{4}-?\d{4}-?\d{4}\b/;



const extractInfo = (text) => {
    const emailRegex = /[[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}/g;
    const phoneRegex = /+?\d{1,4}[-.\s]?)?(\(?\d{2,5}\)?[-.\s]?)?\d{5,10}/g;

    const emails = text.match(emailRegex);
    const phoneNumbers = text.match(phoneRegex);

    return { emails, phoneNumbers };
};

const paragraph = `Lorem ipsum dolor 9221122108 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. 
mytraining@deqode.com Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. 
Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. 
+91-20200-21210 Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. 
Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce (+91)-20200-21210 ut placerat mt@test.inc orci nulla. 
Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada.`;

console.log(extractInfo(paragraph));