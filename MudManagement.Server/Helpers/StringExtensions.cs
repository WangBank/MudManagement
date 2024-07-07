namespace MudManagement.Server.Helpers
{
    public static class StringExtensions
    {
        public static string TruncateToFiveIfLonger(this string input)
        {
            // 检查字符串长度是否超过10位
            if (input != null && input.Length > 10)
            {
                // 返回前5位
                return input.Substring(0, 5);
            }
            // 如果长度不超过10位，返回原始字符串
            return input;
        }
    }
}
