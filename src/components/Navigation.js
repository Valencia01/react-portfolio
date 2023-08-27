import { useState } from 'react';

const Navigation = () => {
    const [expand, setExpand] = useState(false);
    const toggleExpand = () => setExpand(prevExpand => !prevExpand);


    return (
        <div>
            <button onClick={toggleExpand}><span>{expand ? 'x' : '='}</span></button>
            { expand && 
    
                <ul className="">
                    <li href="#" className="px-2 rounded hover:cursor-pointer hover:bg-slate-400">About Me</li>
                    <li href="#" className="px-2 rounded hover:cursor-pointer hover:bg-slate-400">Portfolio</li>
                    <li href="#" className="px-2 rounded hover:cursor-pointer hover:bg-slate-400">Contact Me</li>
                    <li href="#" className="px-2 rounded hover:cursor-pointer hover:bg-slate-400">Resume</li>
                </ul>
                
            }
        </div>
    );
};

export default Navigation;