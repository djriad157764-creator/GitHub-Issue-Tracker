1️⃣ What is the difference between var, let, and const?

var, let, এবং const এর মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।
var ব্যবহার করলে hoisting হয়ে যায় এবং একই নামে একাধিক variable declare করা যায়। এজন্য অনেক সময় বুঝা যায় না কোথায় সমস্যা হয়েছে। এছাড়া var JavaScript এর পুরনো version এ বেশি ব্যবহার করা হতো।
অন্যদিকে let এবং const ব্যবহার করলে একই নামে একাধিক variable declare করা যায় না। যদি করার চেষ্টা করি তাহলে editor এর ভিতরে error বা indication দেখায়।
let এবং const এর মধ্যে পার্থক্য হলো—
যদি আমরা variable এর value পরে পরিবর্তন করতে চাই তাহলে let ব্যবহার করি। আর যদি value পরিবর্তন করার দরকার না হয় তাহলে সব সময় const ব্যবহার করা ভালো।

2️⃣ What is the spread operator (...)?

Spread operator (...) ব্যবহার করে আমরা array বা object এর ভেতরের উপাদানগুলো আলাদা করে ব্যবহার করতে পারি।
এটা function এর ভিতরে বা বাইরে উভয় জায়গায় ব্যবহার করা যায়। Spread operator ব্যবহার করলে array বা object এর elements সহজে copy, merge বা pass করা যায়।

3️⃣ What is the difference between map(), filter(), and forEach()?

map(), filter() এবং forEach() তিনটিই array এর উপর কাজ করে, কিন্তু তাদের কাজ আলাদা।
map() ব্যবহার করে আমরা array এর প্রতিটি element এর উপর কাজ করে নতুন একটি array তৈরি করতে পারি।
filter() ব্যবহার করে আমরা array থেকে নির্দিষ্ট শর্ত অনুযায়ী element খুঁজে বের করতে পারি এবং নতুন array return করে।
forEach() সাধারণত map, filter, reduce এর মতো array এর উপর loop চালানোর জন্য ব্যবহার করা হয়, কিন্তু এটি কোনো নতুন value বা array return করে না।

4️⃣ What is an arrow function?

Arrow function হচ্ছে ES6 এর একটি নতুন এবং সহজ syntax।
Arrow function লিখা অনেক সহজ এবং ছোট হয়। যদি function টি single line হয় তাহলে অনেক সময় return লিখতে হয় না। এজন্য arrow function ব্যবহার করলে code ছোট এবং readable হয়।

5️⃣ What are template literals?

Template literals হলো ES6 এর একটি নতুন feature।
এটা ব্যবহার করে আমরা JavaScript এর মধ্যে multi-line HTML বা string লিখতে পারি এবং খুব সহজে dynamic value বসাতে পারি। সাধারণত template literals লিখতে backtick ( ) ব্যবহার করা হয়।