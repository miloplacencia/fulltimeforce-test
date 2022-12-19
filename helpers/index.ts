export const formatToRelative = (datestr: string) => {
  const intl = new Intl.RelativeTimeFormat('es-CL', {
    style: 'long',
    numeric: 'auto',
  });
  const date = Math.floor((new Date(datestr).getTime() - new Date().getTime()) / (3600*1e3));

  return intl.format(date, 'hours');
}