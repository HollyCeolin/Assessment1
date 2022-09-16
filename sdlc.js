// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Implementation
// Design
// Maintain
// Analysis of Requirements
// Testing & Integration
// Planning

var Lifecycle = "1. Planning, 2. Analysis of requiremnts, 3. Design, 4. Testing & Integration, 5. Implentation, 6. Maintain"

console.log(Lifecycle)
//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning = "Planning: This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added." 
const Analysis = "Analysis: The second step, where developers gather all the specific details required for a new system, and determine the first ideas for a prototype."
const Design = "Design: This stage is necessary for the main developer stage.  This is where the developer outlines the details for the overall application and specific aspects, such as: user interfaces, system interfaces, network and network requirements, databases."
const Testing = "Testing: Developers will write the code and build the application from the design step before.  Then the developer will test all the code to check for amy bugs and check for the end-user experience will not negatively be affected at any point."
const Implementation = "Implentation: The overall design for the software will come together.  Different modules or designs will be integrated into the primary source code through developer efforts, usually by leveraging training environments to detect further errors or defects."
const Maintain = "Maintain: Developers begin practicing any activities required to handle issues reported by end-users.  Also, developers are responsible for implementing any change that the software might need after deployment."

var SoftwareLifeCycle = ["Step 1", planning, "Step 2", Analysis, "Step 3", Design, "Step 4", Testing, "Step 5", Implementation, "Step 6", Maintain]; 
console.log("These are the definitions for the 6 stages of the sftware lifecycle. " , SoftwareLifeCycle)