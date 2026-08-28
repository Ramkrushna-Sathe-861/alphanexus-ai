from services.market_data_service import (
    get_latest_price,
    get_market_summary,
    get_price_history
)


if __name__ == "__main__":
    latest_price = get_latest_price("NVDA")
    summary = get_market_summary("NVDA")
    history = get_price_history("NVDA")

    print("Latest Price:")
    print(latest_price)

    print("\nMarket Summary:")
    print(summary)

    print("\nPrice History:")
    for row in history:
        print(row)