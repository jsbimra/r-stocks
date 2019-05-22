import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout(props) {
    return (
        <div className="container">
            <Header />
            {props.children}
        </div>
    )
}

// export default Layout;