const isPangram = s => (s.toLowerCase().match(/([a-z])(?!.*\1)/g) || []).length === 26

export default isPangram