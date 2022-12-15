import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Profile, Text, ButtonLogOut } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Profile>
      <Text>Welcome, {user.name}</Text>
      <ButtonLogOut type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonLogOut>
    </Profile>
  );
};
