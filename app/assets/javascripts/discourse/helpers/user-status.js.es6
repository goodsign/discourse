import { iconHTML } from 'discourse-common/helpers/fa-icon';
import { htmlHelper } from 'discourse-common/lib/helpers';
import { escapeExpression } from 'discourse/lib/utilities';

export default htmlHelper((user, args) => {
  if (!user) { return; }

  const name = escapeExpression(user.get('name'));
  let currentUser = args.currentUser;
  if (!currentUser && args.hash) {
    currentUser = args.hash.currentUser;
  }

  if (currentUser && user.get('admin') && currentUser.get('staff')) {
    return iconHTML('shield', { label: I18n.t('user.admin', { user: name }) });
  }
  if (user.get('moderator')) {
    return iconHTML('shield', { label: I18n.t('user.moderator', { user: name }) });
  }
});
