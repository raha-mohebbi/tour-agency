Tour Agency Project
 Project Description

This is a travel and tourism website built with Vue 3 and Tailwind CSS.
The goal of the project is to provide a clean, reusable UI component system and an engaging user experience.

 Atomic Design

Components are organized using the Atomic Design methodology:

Atoms: Button, Input, Badge, Icon

Molecules: TourCard, SearchBar, Rating

Organisms: Header, Footer, TourList

Templates: HomeTemplate (combination of Organisms and Molecules)

Pages: Home.vue, TourDetail.vue, ToursList.vue, TourMagazine.vue, LatestOffers.vue, HomeBlog.vue

🛠 Storybook

Storybook is installed for the project and components are documented with 3 variations:

Button: Primary / Secondary / Disabled

TourCard: Available / SoldOut / Featured

Header: LoggedOut / LoggedIn

Each story includes information about props and component states.

Run Storybook
npm install
npm run storybook


Storybook will open at: http://localhost:6006

 Mock API

Tour data is mocked using JSON:

[
  { "id": 1, "title": "North Tour", "price": 200, "status": "available" },
  { "id": 2, "title": "Kish Tour", "price": 300, "status": "soldout" },
  { "id": 3, "title": "Mashhad Featured Tour", "price": 400, "status": "featured" }
]


Data is used for testing and displaying components.

Assumptions / Trade-offs:

The number of tours is limited to 5 for simpler testing.

Some states like hover and active are simulated in a simple way.

 Installation and Running the Project
npm install
npm run dev


The project will run on http://localhost:51771/ (or another available port).

 Notes

The project is designed to be easily extendable with new components.

Storybook serves as a reference for UI components and documentation.
