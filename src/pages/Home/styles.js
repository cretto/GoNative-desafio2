import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flex: 1,
  },

  empty: {
    color: colors.dark,
    marginTop: metrics.baseMargin * 2,
    textAlign: 'center',
  },

  form: {
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    padding: metrics.basePadding,
  },

  formIcon: {
    color: colors.dark,
  },

  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  formInput: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    color: colors.darker,
    flex: 1,
    fontSize: 14,
    marginRight: metrics.baseMargin,
    padding: metrics.basePadding / 2,
  },

  placeholderColor: {
    color: colors.regular,
  },

  loading: {
    marginTop: metrics.baseMargin * 2,
  },

  error: {
    color: colors.danger,
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: metrics.basePadding,
    textAlign: 'center',
  },

  listContainer: {
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.baseMargin * 2,
  },
});

export default styles;
