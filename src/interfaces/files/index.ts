import { defineInterface } from '../define';
import InterfaceFiles from './files.vue';

export default defineInterface(({ i18n }) => ({
	id: 'files',
	name: i18n.t('files'),
	icon: 'note_add',
	component: InterfaceFiles,
	options: [],
}));
