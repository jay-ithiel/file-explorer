This is a simple file explorer app I built for fun, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![file-explorer](https://res.cloudinary.com/ddgtwtbre/image/upload/v1541993056/Screen_Shot_2018-11-11_at_7.22.25_PM_ct9ady.png)

It features an accordion structure so that users can click to expand & collapse a folder to examine its contents

![file-explorer](https://res.cloudinary.com/ddgtwtbre/image/upload/v1541993058/Screen_Shot_2018-11-11_at_7.22.52_PM_wtzihc.png)


There was a UI/UX problem that arose while building the app. When displaying a file or folder with an extremely long name, the name would get cut off. I first made a simple solution that allowed the user to scroll sideways which worked, but wasn't a great user experience. I wanted to polish it.

I looked around for a simple `Resizeable` component package I could plug and play but I couldn't find any that I liked, so I created a custom `Resizeable` React Higher Order Component (HOC) that features a simple & universal click-and-drag functionality that allows the user to resize the app however they want.

![file-explorer](https://res.cloudinary.com/ddgtwtbre/image/upload/v1541993057/Screen_Shot_2018-11-11_at_7.23.02_PM_uvcc4m.png)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
