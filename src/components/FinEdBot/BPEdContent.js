import React from 'react'

import "../../stylesheets/css/bp-content.css"
import { MDBContainer } from "mdb-react-ui-kit";

function BPEdContent() {
    return (
    <div className="bp-content" > 
        <div className='how-to-bp'>
            <h2>How To Create a Business Plan</h2>
            <MDBContainer>
            <div className="ratio ratio-16x9">
                <iframe
                src="https://www.youtube.com/watch?v=lZi4A9pyJb4"
                title="YouTube video"
                allowfullscreen
                ></iframe>
            </div>
            </MDBContainer>
        </div>
        <div className='what-is-bp'>
            <h2>What is a Business Plan</h2>
            <p>
                A business plan is a document describing a business, its products or services, how it earns (or will earn) money, its leadership and staffing, its financing, its operations model, and many other details essential to its success.
            </p>
        </div>
        <div className='why-bp'>
            <h2>Why write a business plan?</h2>
            <p>
                Investors rely on business plans to evaluate the feasibility of a business before funding it, which is why business plans are commonly associated with getting a loan. But there are several compelling reasons to consider writing a business plan, even if you don’t need funding.
            </p>
            <ul>
                <li> Strategic planning: Writing out your plan is an invaluable exercise for clarifying your ideas and can help you understand the scope of your business, as well as the amount of time, money, and resources you’ll need to get started.</li>
                <li>Evaluating ideas: If you’ve got multiple ideas in mind, a rough business plan for each can help you focus your time and energy on the ones with the highest chance of success.</li>
                <li>Research: To write a business plan, you’ll need to research your ideal customer and your competitors—information that will help you make more strategic decisions.</li>
                <li>Recruiting: Your business plan is one of the easiest ways to communicate your vision to potential new hires and can help build their confidence in the venture, especially if you’re in the early stages of growth.</li>
                <li>Partnerships: If you plan to approach other companies to collaborate, having a clear overview of your vision, your audience, and your business strategy will make it much easier for them to identify whether your business is a good fit for theirs—especially if they’re further along than you in their growth trajectory.</li>
                <li>Competitions: There are many business plan competitions offering prizes such as mentorships, grants, or investment capital. To find relevant competitions in your industry and area, try Googling “business plan competition + [your location]” and “business plan competition + [your industry].”</li>
            </ul>
            <p>
                If you’re looking for a structured way to lay out your thoughts and ideas, and to share those ideas with people who can have a big impact on your success, a business plan is an excellent starting point.
            </p>
        </div>
    </div>
    
    )
}

export default BPEdContent