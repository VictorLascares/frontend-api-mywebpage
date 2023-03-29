import { NavItem } from "./NavItem";

const links = [
    { link: 'Usuarios', url: '/users' }, 
    { link: 'Proyectos', url: '/projects' }, 
    { link: 'Habilidades', url: '/skills' }, 
    { link: 'Tecnologias', url: '/tecnologies' }, 
];


export const Header = () => {
    return (
        <header>
            <nav className="bg-zinc-700 py-2 flex justify-center">
                <ul className="flex gap-2 items-center">
                    {
                        links.map(link =>
                            <NavItem 
                                key={link.link}
                                link={link}
                            />
                        )
                    } 
                </ul>
            </nav>
        </header>
    );
};