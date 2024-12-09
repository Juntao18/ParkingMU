Web Link:
https://muparking.vercel.app/
OR
https://parking-mu-three.vercel.app/

Things to note if using source code:
Important：
	install leaflet react-leaflet   
	If Still Not Working，Install All
	//Deleted：npm install @react-google-maps/api  

Project Title
	Individual Project：
	Smart Parking Management for Campus Life Improvement

Project Theme:Life Improvement	

1. Overall Project Objectives 
	This project addresses the challenge of finding available parking spots on a busy university campus. By providing a user-friendly and interactive Smart Parking Management App, it improves the daily lives of students, staff, and visitors by saving time, reducing stress, and promoting better parking practices. 
2.Purpose and Functionality
	The app serves as a real-time parking guide, enabling users to quickly locate and book parking spots. It achieves this through
	Interactive Map Integration: The app uses a dynamic map powered by OpenStreetMap to visualize campus parking lots.
	Live Parking Updates: Users can view the availability of parking spots on the map and interact with markers for detailed status updates
	Simplified Navigation: Each parking lot is associated with a detailed information page, which users can access via intuitive links from the map.
	User Engagement: The app features a visually appealing design and allows users to explore options through dropdown menus and interactive elements.
3.Key Features
	Interactive Map: Displays campus parking lots using markers, showing real-time availability status.
	Booking Links: Each marker includes a direct link to book a parking spot or view details.
	User Experience: Implements conditional rendering, ensuring users receive feedback based on parking availability
	Map Navigation Boundaries: Restricts map exploration to the campus area, keeping the focus on relevant locations.
4.Impact on Life Improvement
	This project simplifies and enhances the parking experience on campus, promoting:
		Time Efficiency: Reduces the time spent searching for available parking spots.
		Stress Reduction: Eliminates frustration caused by unpredictable parking conditions.
		Environmental Benefits: Decreases unnecessary driving, contributing to reduced emissions.
5.Conclusion
	The Smart Parking Management App is an innovative solution to a common campus problem. By improving parking accessibility, it contributes to a smoother, more organized campus experience, aligning with the Life Improvement theme by saving time, reducing stress, and fostering sustainable practices.

6. Function 
	I have used the following functionalities:

		Using an API
    		Using the OpenStreetMap API to render maps via the TileLayer component:
			javascript<br><TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
		Conditional rendering
			Conditional rendering is used to display different content based on parking lot status:
			javascript<br>{props.slot == 0 ? <H4>No slots available</H4> : <H4>Slots available</H4>}
		Using a selection of User Interface elements	
			A dropdown menu is used to allow users to select parking lots:
			javascript<br><StyledSelect><option value="welcome">Welcome</option></StyledSelect>
		Parent-child communication	
			Parent components pass state and methods to child components via props:
			javascript<br><CarPark1 slot={slotA} setSlot={setSlotA} grid={gridA} setGrid={setGridA} />
		Using Multiple Components	
			Multiple independent components (e.g., Car1.js, HomePage.js, ParkingMap.js) are used and integrated in App.js.
		Using React Router	
			React Router is used in App.js to configure routing for the app:
			javascript<br><BrowserRouter><Routes><Route path="/" element={<HomePage />} /></Routes></BrowserRouter>
		Developing your own computation or algorithms	
			Custom algorithms like the toggleColor function are implemented to update parking slot statuses:
			javascript<br>function toggleColor(rowIndex, colIndex) { ... }

Using an API	✔️			
Conditional rendering	✔️			
Using a selection of User Interface elements	✔️		
Parent-child communication	✔️		
Using Multiple Components	✔️		
Using React Router	✔️		
Developing your own computation or algorithms	✔️			
