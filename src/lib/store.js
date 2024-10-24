// store.js
import { writable } from 'svelte/store';

// Initialize with static data for testing
export const blogsList = writable([
    // { id: '1', title: 'Blockchain based Intelligent Transport Systems', summary: 'Discover how blockchain technology is revolutionizing intelligent transport systems (ITS) by enhancing data security, transparency, and efficiency. Learn about real-life use cases, challenges, and solutions in integrating blockchain with ITS for a smarter transportation future.' },
    // {id: '2', title: 'How Blockchain can facilitate free and fair elections in India?', summary: 'Explore how blockchain technology can enhance the integrity, transparency, and accessibility of elections in India, promoting a more free and fair electoral process.'},
    // {id: '3', title: 'Harnessing Blockchains Data Integrity', summary: 'In todays digital world, data security and integrity are paramount. Blockchain technology offers a revolutionary solution for businesses struggling with these issues. This blog post explores how blockchains key features, including its immutable ledger, digital signatures, decentralized architecture, smart contracts, and transparency, work together to ensure data integrity. By leveraging blockchain, organizations can protect sensitive information from manipulation, fraud, and unauthorized access. This fosters trust and streamlines processes, paving the way for a future where data security is not just an ideal, but a reality.'}
]);
blogsList.subscribe(value => {
    console.log("blogsList3.", value);
});