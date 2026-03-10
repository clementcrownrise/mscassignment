class Contact {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}

class Node {
    constructor(contact) {
        this.contact = contact;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(contact) {
        const newNode = new Node(contact);

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    displayForward() {
        let current = this.head;
        while (current) {
            console.log(`${current.contact.name} - ${current.contact.phone}`);
            current = current.next;
        }
    }

    displayBackward() {
        let current = this.tail;
        while (current) {
            console.log(`${current.contact.name} - ${current.contact.phone}`);
            current = current.prev;
        }
    }
}

function naiveSearch(text, pattern) {
    text = text.toLowerCase();
    pattern = pattern.toLowerCase();

    for (let i = 0; i <= text.length - pattern.length; i++) {
        if (text.substring(i, i + pattern.length) === pattern) {
            return true;
        }
    }

    return false;
}

class ContactManager {
    constructor() {
        this.list = new DoublyLinkedList();
        this.hashTable = {};
    }

    addContact(name, phone) {
        const contact = new Contact(name, phone);

        this.list.append(contact);
        this.hashTable[name.toLowerCase()] = contact;

        console.log("Contact added successfully!");
    }

    searchByName(name) {
        const contact = this.hashTable[name.toLowerCase()];

        if (contact) {
            console.log(`Found: ${contact.name} - ${contact.phone}`);
        } else {
            console.log("Contact not found.");
        }
    }

    searchByKeyword(keyword) {
        let current = this.list.head;
        let found = false;

        while (current) {
            if (naiveSearch(current.contact.name, keyword)) {
                console.log(`${current.contact.name} - ${current.contact.phone}`);
                found = true;
            }
            current = current.next;
        }

        if (!found) {
            console.log("No matching contacts found.");
        }
    }

    displayForward() {
        this.list.displayForward();
    }

    displayBackward() {
        this.list.displayBackward();
    }
}