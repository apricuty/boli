import { CodeStyle } from '../styles/codeStyles';

export const highlightCode = (code: string, style: CodeStyle): string => {
  // 创建一个临时的 div 来安全地处理 HTML
  const createSpan = (content: string, color: string) => {
    return `<span class="code-token" style="color: ${color}">${content}</span>`;
  };

  return code
    .split('\n')
    .map(line => {
      // 创建一个标记数组来存储需要高亮的部分
      let tokens: { start: number; end: number; color: string; content: string }[] = [];

      // 匹配所有需要高亮的部分
      // 1. 关键字
      const keywordRegex = /\b(const|let|var|function|return|if|else|for|while|class|import|export|default|extends|=>)\b/g;
      let match;
      while ((match = keywordRegex.exec(line)) !== null) {
        tokens.push({
          start: match.index,
          end: match.index + match[0].length,
          color: style.keyword,
          content: match[0]
        });
      }

      // 2. 函数名
      const functionRegex = /\b(\w+)(?=\s*\()/g;
      while ((match = functionRegex.exec(line)) !== null) {
        tokens.push({
          start: match.index,
          end: match.index + match[0].length,
          color: style.function,
          content: match[0]
        });
      }

      // 3. 字符串
      const stringRegex = /(["'`])(?:(?=(\\?))\2.)*?\1/g;
      while ((match = stringRegex.exec(line)) !== null) {
        tokens.push({
          start: match.index,
          end: match.index + match[0].length,
          color: style.string,
          content: match[0]
        });
      }

      // 4. 数字
      const numberRegex = /\b(\d+)\b/g;
      while ((match = numberRegex.exec(line)) !== null) {
        tokens.push({
          start: match.index,
          end: match.index + match[0].length,
          color: style.number,
          content: match[0]
        });
      }

      // 5. 注释
      const commentRegex = /(\/\/.*$|\/\*[\s\S]*?\*\/)/g;
      while ((match = commentRegex.exec(line)) !== null) {
        tokens.push({
          start: match.index,
          end: match.index + match[0].length,
          color: style.comment,
          content: match[0]
        });
      }

      // 按开始位置排序标记
      tokens.sort((a, b) => a.start - b.start);

      // 移除重叠的标记
      tokens = tokens.filter((token, index) => {
        if (index === 0) return true;
        const prevToken = tokens[index - 1];
        return token.start >= prevToken.end;
      });

      // 构建高亮后的行
      let result = '';
      let lastIndex = 0;

      tokens.forEach(token => {
        // 添加未高亮的文本
        if (token.start > lastIndex) {
          result += line.substring(lastIndex, token.start);
        }
        // 添加高亮的文本
        result += createSpan(token.content, token.color);
        lastIndex = token.end;
      });

      // 添加剩余的未高亮文本
      if (lastIndex < line.length) {
        result += line.substring(lastIndex);
      }

      return result || line;
    })
    .join('\n');
}; 