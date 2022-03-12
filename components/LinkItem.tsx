import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

const LinkItem = ({ href, path, _target, children, ...props }: any) => {
  const active = path === href;
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : 'whiteAlpha.900'}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default LinkItem;
