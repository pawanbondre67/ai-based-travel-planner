
# AI-Based Travel Planner (TravelTrail)

An AI-powered travel planning application built using React, Gemini AI, and Firebase. This personalized app allows users to plan their trips by inputting details such as destination, number of travelers, number of days, budget, and more. The AI then suggests hotels, places to visit, and other travel-related information to help users create a comprehensive itinerary.

## Features

- **Personalized Travel Planning:** Users can input details like destination, number of travelers, number of days, and budget to receive customized travel recommendations.
- **AI Recommendations:** The app uses Gemini AI to suggest hotels, attractions, and activities based on the user's preferences and budget.
- **User Authentication:** Secure user authentication is implemented using Firebase, ensuring user data privacy and access control.
- **Data Storage:** Users' travel plans and preferences are stored in Firebase Firestore, allowing easy access and management of saved itineraries.
- **Responsive UI:** The app is designed with a responsive user interface, providing a seamless experience on both desktop and mobile devices.
- **Real-time Updates:** The application offers real-time updates for personalized travel suggestions and itinerary changes.

## Tech Stack

- **Frontend:** React
- **AI Integration:** Gemini AI
- **Backend Services:** Firebase (Authentication, Firestore, Hosting)
- **Deployment:** Firebase Hosting
- **Other Technologies:** TailwindCSS for styling, TypeScript for logic

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/pawanbondre67/ai-based-travel-planner.git
    cd ai-based-travel-planner
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up Firebase:
   - Create a Firebase project and configure authentication and Firestore.
   - Update the Firebase configuration in the project.

4.  Create Environment.ts 
    - Add Gemini API key
    - Add UNSPLASH API key
    - Add firebase Confidential data

5. Start the development server:
    ```bash
    npm run dev 
    ```

6. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Usage

1. Sign up or log in to the application.
2. Input your travel details: destination, number of travelers, number of days, budget, etc.
3. Get AI-generated suggestions for hotels, places to visit, and activities.
4. Save your itinerary and make updates as needed.
5. Access your saved itineraries anytime.

## Contact

For any questions or feedback, please contact:
- **Email**: pawanbondre19@gmail.com
- **GitHub**: [pawanbondre](https://github.com/pawanbondre67)

## Contributing

Feel free to fork the repository and submit pull requests for new features or bug fixes.


## License

This project is licensed under the MIT License.
