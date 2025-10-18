// Logger Utility - Proper logging system for the project
// Zamjenjuje console.log statements s kontroliranim loggingom

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LoggerConfig {
  level: LogLevel;
  enableConsole: boolean;
  enableAnalytics: boolean;
}

class Logger {
  private config: LoggerConfig;

  constructor(config: LoggerConfig = { 
    level: 'info', 
    enableConsole: false,
    enableAnalytics: false 
  }) {
    this.config = config;
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: LogLevel[] = ['debug', 'info', 'warn', 'error'];
    return levels.indexOf(level) >= levels.indexOf(this.config.level);
  }

  private formatMessage(level: LogLevel, message: string): string {
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`;
    return `${prefix} ${message}`;
  }

  debug(message: string, ...args: unknown[]): void {
    if (this.shouldLog('debug') && this.config.enableConsole) {
      console.debug(this.formatMessage('debug', message), ...args);
    }
  }

  info(message: string, ...args: unknown[]): void {
    if (this.shouldLog('info') && this.config.enableConsole) {
      console.info(this.formatMessage('info', message), ...args);
    }
  }

  warn(message: string, ...args: unknown[]): void {
    if (this.shouldLog('warn') && this.config.enableConsole) {
      console.warn(this.formatMessage('warn', message), ...args);
    }
  }

  error(message: string, ...args: unknown[]): void {
    if (this.shouldLog('error') && this.config.enableConsole) {
      console.error(this.formatMessage('error', message), ...args);
    }
  }

  // Performance logging
  performance(metric: string, value: number, context?: Record<string, unknown>): void {
    if (this.config.enableAnalytics && typeof window !== 'undefined') {
      // Send to analytics if available
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'performance_metric', {
          metric_name: metric,
          metric_value: value,
          page_url: window.location.href,
          ...context
        });
      }
    }
    
    this.debug(`Performance: ${metric} = ${value}ms`, context);
  }

  // Event logging
  event(eventName: string, parameters?: Record<string, unknown>): void {
    if (this.config.enableAnalytics && typeof window !== 'undefined') {
      // Send to analytics if available
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', eventName, {
          ...parameters,
          page_url: window.location.href
        });
      }
    }
    
    this.debug(`Event: ${eventName}`, parameters);
  }

  // Search logging
  search(query: string, resultsCount: number, filters?: Record<string, unknown>): void {
    this.event('search', {
      query: query.substring(0, 50), // Limit query length
      results_count: resultsCount,
      filters
    });
  }

  // Error logging with context
  logError(error: Error, context?: Record<string, unknown>): void {
    this.error(`Error: ${error.message}`, {
      stack: error.stack,
      context
    });
  }
}

// Export singleton instance with environment-based configuration
export const logger = new Logger({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'error',
  enableConsole: process.env.NODE_ENV === 'development',
  enableAnalytics: process.env.NODE_ENV === 'production'
});

// Export the class for custom instances
export { Logger, type LogLevel, type LoggerConfig };
