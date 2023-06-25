import { Box, NavLink } from '@mantine/core';
import { IconGauge, IconFingerprint } from '@tabler/icons-react';
import {Link} from "react-router-dom";

export default function MenuNavbar() {
    return (
        <Box w={280}>
            <NavLink
                label="First parent link"
                icon={<IconGauge size="1rem" stroke={1.5} />}
                childrenOffset={28}
            >
                <NavLink label="Home" to="/" component={Link} />
                <NavLink label="About" to="/about" component={Link} />
                <NavLink label="Nested parent link" childrenOffset={28}>
                    <NavLink label="First child link" />
                    <NavLink label="Second child link" />
                    <NavLink label="Third child link" />
                </NavLink>
            </NavLink>

            <NavLink
                label="Second parent link"
                icon={<IconFingerprint size="1rem" stroke={1.5} />}
                childrenOffset={28}
                defaultOpened
            >
                <NavLink label="First child link" />
                <NavLink label="Second child link" />
                <NavLink label="Third child link" />
            </NavLink>
        </Box>
    );
}
