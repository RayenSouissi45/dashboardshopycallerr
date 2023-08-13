function ProductIcon () {
    return (
        <svg className="w-4 inline-block mr-2" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" className="text-gray-300" />
                    <stop offset="50%" className="text-gray-400" />
                    <stop offset="100%" className="text-gray-300" />
                  </linearGradient>
                </defs>
                <polygon
                  points="50 0, 90 30, 90 70, 50 100, 10 70, 10 30"
                  fill="url(#grad1)"
                  stroke="gray"
                  strokeWidth={2}
                />
              </svg>
    )
}
export default ProductIcon ;