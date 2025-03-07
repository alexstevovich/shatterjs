import { Doc } from '../src/index.mjs';

console.log('\n--- ShatterJS Test ---\n');

const source = `#!/usr/bin/env node

// Header comment
/* Multi-line
   header block comment */

const hello = 'world';
console.log(hello);

// Footer comment
`;

const doc = new Doc();
doc.from(source);

const expected = {
    shebang: '#!/usr/bin/env node',
    head: `// Header comment\n/* Multi-line\n   header block comment */`,
    body: `const hello = 'world';\nconsole.log(hello);`,
    footer: `// Footer comment`
};

const results = {
    shebang: doc.shebang.content.trim(),
    head: doc.head.content.trim(),
    body: doc.body.content.trim(),
    footer: doc.footer.content.trim()
};

let passed = true;

for (const key of Object.keys(expected)) {
    if (results[key] !== expected[key]) {
        passed = false;
        console.error(`❌ ${key.toUpperCase()} MISMATCH`);
        console.error(`Expected:\n${expected[key]}`);
        console.error(`Received:\n${results[key]}\n`);
    } else {
        console.log(`✅ ${key.toUpperCase()} matches expected output.`);
    }
}

if (passed) {
    console.log('\n🎉 All tests passed!\n');
    //process.exit(0);
} else {
    console.error('\n❌ One or more tests failed.\n');
    //process.exit(1);
}
