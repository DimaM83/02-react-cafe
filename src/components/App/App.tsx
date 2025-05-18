// import styles from './App.module.css';
// import CafeInfo from '../CafeInfo/CafeInfo';
// import { Votes, VoteType } from '../../types/votes';
// import { useState } from 'react';


// export default function App() {
//     const [votes, setVotes] = useState<Votes>({
//         good: number;
//         neutral: number;
//         bad: number;
//     });

//     const handleVote = (type: VoteTupe) => {
//         setVotes(prev => ({
//             ...prev,
//             [type]: prev[type] + 1,
//         }));
//     };

//     const resetVotes = () => {
//         setVotes({
//             good: number;
//             neutral: number;
//             bad: number;
//         });
//     };
//     return <div className={styles.app}>
//         <CafeInfo />
//     </div>;
// }





import React, { useState } from 'react';
import styles from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import type { Votes, VoteType } from '../../types/votes';

export default function App() {
    const [votes, setVotes] = useState<Votes>({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    const handleVote = (type: VoteType) => {
        setVotes(prev => ({
            ...prev,
            [type]: prev[type] + 1,
        }));
    };

    const resetVotes = () => {
        setVotes({ good: 0, neutral: 0, bad: 0 });
    };

    return (
        <div className={styles.app}>
            <CafeInfo />
        </div>
    );
}
