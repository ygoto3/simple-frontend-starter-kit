const context = require.context('./src', true, /\S+-test\.jsx?$/);
context.keys().forEach(context);
